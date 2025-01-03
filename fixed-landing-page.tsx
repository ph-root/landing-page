import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Star,
  Shield,
  Battery,
  MessageCircle,
  Gift,
  Check
} from 'lucide-react';

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    submitted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, submitted: true }));
  };

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "إضاءة LED",
      desc: "تساعدك على رؤية حتى أدق الشعيرات"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "آمنة للبشرة",
      desc: "مناسبة لجميع أنواع البشرة"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "شحن طويل",
      desc: "تعمل بالشحن لاستخدام مريح"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white" dir="rtl">
      {/* Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-800">Yes</div>
            <Button
              onClick={() => document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              اطلبي الآن
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-5xl font-bold text-purple-800 mb-6">
                تخلصي من الشعر الزائد بسهولة وبدون ألم مع ماكينة Yes!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                ماكينة Yes لإزالة الشعر تمنحك بشرة ناعمة كالأطفال في دقائق
              </p>
              <Button
                onClick={() => document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                احصلي عليها الآن بخصم 20%
                <Gift className="mr-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Yes Hair Removal Device"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-2 rounded-full shadow-lg">
                خصم 20%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">مميزات ماكينة Yes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="orderForm" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">اطلبي الآن</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                {formData.submitted ? (
                  <Alert className="bg-green-50 border-green-200">
                    <Check className="w-4 h-4 text-green-500" />
                    <AlertDescription className="text-green-700">
                      تم استلام طلبك بنجاح! سنتواصل معك قريباً لتأكيد الطلب.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">الاسم بالكامل</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">العنوان بالتفصيل</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="city">المحافظة</Label>
                      <Select
                        onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="اختاري المحافظة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cairo">القاهرة</SelectItem>
                          <SelectItem value="giza">الجيزة</SelectItem>
                          <SelectItem value="alexandria">الإسكندرية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      size="lg"
                    >
                      تأكيد الطلب
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="text-xl font-bold mb-4">تواصلي معنا</h3>
              <p>هاتف: 16XXX</p>
              <p>القاهرة، مصر</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-300">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-purple-300">الشروط والأحكام</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Yes</h3>
              <p>منتجات العناية المتكاملة</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <a
          href="https://wa.me/+201234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;