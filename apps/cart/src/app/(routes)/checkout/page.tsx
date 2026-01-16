'use client';

import React, { useState, useMemo } from 'react';
import './Checkout.scss';
import {
  Steps,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Space,
  Radio,
} from 'antd';
import NavBar from '@repo/ui/NavBar';
import Footer from '@repo/ui/Footer';
import CartCard, { CartItem } from '@/app/components/CartCard/CartCard';
import { SAMPLE_PRODUCTS } from '@repo/ui/data/sample-product.ts';

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Shipping, 1: Delivery, 2: Payment
  const [deliveryFee, setDeliveryFee] = useState(0);

  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    SAMPLE_PRODUCTS.slice(0, 3).map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      variant: p.variant?.[0],
      quantity: 1,
    }))
  );

  const handleIncrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const shipping = subtotal > 95 ? 0 : 10;

  const total = subtotal + shipping + deliveryFee;

  const ShippingForm = ({ onNext }: { onNext: () => void }) => (
    <Form layout='vertical'>
      {/* CONTACT */}
      <h3 className='form-title'>Contact Details</h3>

      <div className='form-grid'>
        <Form.Item label='First Name' name='firstName'>
          <Input />
        </Form.Item>

        <Form.Item label='Last Name' name='lastName'>
          <Input />
        </Form.Item>
      </div>

      <Form.Item label='Email' name='email'>
        <Input />
      </Form.Item>

      <Form.Item label='Phone Number' name='phone'>
        <Space.Compact style={{ width: '100%' }}>
          <Select
            defaultValue='+91'
            options={[
              { value: '+1', label: '+1' },
              { value: '+84', label: '+84' },
              { value: '+91', label: '+91' },
            ]}
            style={{ width: 100 }}
          />
          <Input />
        </Space.Compact>
      </Form.Item>

      {/* SHIPPING */}
      <h3 className='form-title'>Shipping Details</h3>

      <Form.Item label='Flat / House no.' name='address1'>
        <Input />
      </Form.Item>

      <Form.Item label='Address' name='address2'>
        <Input />
      </Form.Item>

      <div className='form-grid'>
        <Form.Item label='City' name='city'>
          <Input />
        </Form.Item>

        <Form.Item label='State' name='state'>
          <Input />
        </Form.Item>
      </div>

      <div className='form-grid'>
        <Form.Item label='Postal Code' name='postal'>
          <Input />
        </Form.Item>

        <Form.Item label='Famous Landmark' name='landmark'>
          <Input />
        </Form.Item>
      </div>

      <Form.Item name='sameAddress' valuePropName='checked'>
        <Checkbox>My shipping and billing address are the same</Checkbox>
      </Form.Item>

      <Button type='primary' block size='large' onClick={onNext}>
        Continue
      </Button>
    </Form>
  );

  const DeliveryStep = ({
    value,
    onChange,
    onBack,
    onNext,
  }: {
    value: number;
    onChange: (v: number) => void;
    onBack: () => void;
    onNext: () => void;
  }) => (
    <>
      <h3 className='form-title'>Delivery Options</h3>

      <Radio.Group
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%' }}
      >
        <div className='delivery-option'>
          <Radio value={0}>Standard 5–7 Business Days</Radio>
          <span className='price free'>FREE</span>
        </div>

        <div className='delivery-option'>
          <Radio value={5}>2–4 Business Days</Radio>
          <span className='price'>+ $5</span>
        </div>

        <div className='delivery-option'>
          <Radio value={15}>Same day delivery</Radio>
          <span className='price'>+ $15</span>
        </div>
      </Radio.Group>

      <div className='form-actions'>
        <Button onClick={onBack}>Back</Button>
        <Button type='primary' onClick={onNext}>
          Continue
        </Button>
      </div>
    </>
  );

  const PaymentStep = ({
    total,
    onBack,
  }: {
    total: number;
    onBack: () => void;
  }) => {
    const [method, setMethod] = useState<'cod' | 'card' | 'bank' | 'other'>(
      'cod'
    );

    return (
      <>
        <h3 className='form-title'>Payment Methods</h3>

        <Radio.Group
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={{ width: '100%' }}
        >
          {/* COD */}
          <div className='payment-option'>
            <Radio value='cod'>Pay on Delivery</Radio>
            <p className='desc'>Pay with cash on delivery</p>
          </div>

          {/* CARD */}
          <div className='payment-option'>
            <Radio value='card'>Credit / Debit Cards</Radio>
            <p className='desc'>Pay with your Credit / Debit Card</p>

            {method === 'card' && (
              <div className='card-form'>
                <Input placeholder='Card number' />

                <div className='card-grid'>
                  <Input placeholder='MM / YY' />
                  <Input placeholder='CVV' />
                </div>
              </div>
            )}
          </div>

          {/* BANK */}
          <div className='payment-option'>
            <Radio value='bank'>Direct Bank Transfer</Radio>
            <p className='desc'>Make payment directly through bank account.</p>
          </div>

          {/* OTHER */}
          <div className='payment-option'>
            <Radio value='other'>Other Payment Methods</Radio>
            <p className='desc'>Make payment through Gpay, Paypal, Paytm etc</p>
          </div>
        </Radio.Group>

        <div className='form-actions'>
          <Button onClick={onBack}>Back</Button>
          <Button type='primary'>Pay ${total.toFixed(2)}</Button>
        </div>
      </>
    );
  };

  const renderRightContent = () => {
    switch (currentStep) {
      case 0:
        return <ShippingForm onNext={() => setCurrentStep(1)} />;

      case 1:
        return (
          <DeliveryStep
            value={deliveryFee}
            onChange={setDeliveryFee}
            onBack={() => setCurrentStep(0)}
            onNext={() => setCurrentStep(2)}
          />
        );

      case 2:
        return <PaymentStep total={total} onBack={() => setCurrentStep(1)} />;

      default:
        return null;
    }
  };

  return (
    <div className='checkout-page'>
      <NavBar
        message='Complimentary U.S. No-Rush Shipping on orders of $95 or more. Shop now'
        storeUrl='http://localhost:3001/products'
        accountUrl='http://localhost:3003/login'
        cartUrl='http://localhost:3002/checkout'
      />

      {/* Progress */}
      <div className='checkout-steps'>
        <Steps
          current={currentStep}
          items={[
            { title: 'Shipping' },
            { title: 'Delivery' },
            { title: 'Payment' },
          ]}
        />
      </div>

      <div className='checkout-layout'>
        {/* LEFT */}
        <div className='checkout-summary'>
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          ))}
          <div className='summary-totals'>
            <div>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
            </div>

            <div className='total'>
              <span>Total due</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className='checkout-form'>{renderRightContent()}</div>
      </div>
      <div style={{ marginTop: '24px', border: '1px solid #e8e8e8' }}>
        <Footer />
      </div>
    </div>
  );
}
