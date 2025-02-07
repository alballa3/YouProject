import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, CreditCard, ChevronRight, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

// Mock cart items (in a real app, this would come from a cart state or API)
const cartItems = [
  {
    id: 1,
    name: "Urban Zip Hoodie",
    price: 79.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Street Comfort Pullover",
    price: 69.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
]

export default function CheckoutPage() {
    const [step, setStep] = useState(1)
    const [items, setItems] = useState(cartItems || [])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10 // Fixed shipping cost
  const total = subtotal + shipping

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const updateQuantity = (id, newQuantity) => {
    setItems(
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Checkout
        </motion.h1>

        {/* Progress indicator */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            {["Cart", "Shipping", "Payment"].map((label, index) => (
              <div key={label} className="flex flex-col items-center">
                <div
                  className={`rounded-full h-12 w-12 flex items-center justify-center ${step > index + 1 ? "bg-black text-white" : step === index + 1 ? "bg-gray-300" : "bg-gray-200"}`}
                >
                  {step > index + 1 ? "✓" : index + 1}
                </div>
                <div className="text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 hidden sm:block">
            <div className="overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-black transition-all"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Step 1: Cart Review */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6">Review Your Cart</h2>
              {items.map((item) => (
                <Card key={item.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-24 h-24 relative rounded-md overflow-hidden">
                        <img src={item.image || "/placeholder.svg"} alt={item.name} layout="fill" objectFit="cover" className="w-full h-full object-cover"/>
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-gray-500">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-4 text-red-500"
                            onClick={() => updateQuantity(item.id, 0)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Separator className="my-6" />
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <Button onClick={nextStep} className="w-full mt-6">
                Proceed to Shipping <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {/* Step 2: Shipping Information */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  nextStep()
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" required />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={prevStep}>
                    Back to Cart
                  </Button>
                  <Button type="submit">
                    Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-semibold mb-6">Payment</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Order placed successfully!")
                }}
              >
                <RadioGroup defaultValue="card" className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center">
                      <img src="/paypal-icon.png" alt="PayPal" width={16} height={16} className="mr-2" />
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>
                <div className="mt-4">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" required />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p>Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold text-lg">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={prevStep}>
                    Back to Shipping
                  </Button>
                  <Button type="submit">
                    Place Order <ShoppingCart className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

