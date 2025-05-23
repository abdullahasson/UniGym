// app/calculator/page.tsx
"use client";

import { useState } from 'react';

export default function BodyCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState<number>(1.2);
  const [bmi, setBmi] = useState<number | null>(null);
  const [calories, setCalories] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(Number(bmiValue.toFixed(1)));
    }
  };

  const calculateCalories = () => {
    if (weight > 0 && height > 0 && age > 0) {
      const bmr = gender === 'male' 
        ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
        : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      
      setCalories(Math.round(bmr * activityLevel));
    }
  };

  return (
    <div className="px-[5%] py-8 border-[#C5A47E]">
      <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
        {/* قسم حساب BMI */}
        <div className="p-8 rounded-xl border border-[#C5A47E]">
          <h3 className="text-2xl text-[#C5A47E] mb-6">حاسبة مؤشر كتلة الجسم (BMI)</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-[#C5A47E] mb-2">الوزن (كجم)</label>
              <input
                type="number"
                className="w-full bg-[rgba(244,240,236,0.1)] border border-[#C5A47E] text-[#F4F0EC] p-3 rounded"
                value={weight || ''}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-[#C5A47E] mb-2">الطول (سم)</label>
              <input
                type="number"
                className="w-full bg-[rgba(244,240,236,0.1)] border border-[#C5A47E] text-[#F4F0EC] p-3 rounded"
                value={height || ''}
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>

            <button
              onClick={calculateBMI}
              className="w-full bg-gradient-to-r from-[#C5A47E] to-[#B08F6E] text-[#0A1A2F] py-3 rounded font-bold hover:opacity-90 transition"
            >
              احسب الBMI
            </button>

            {bmi && (
              <div className="mt-6 p-4 bg-[#C5A47E] rounded text-[#0A1A2F] text-center">
                <p className="font-bold text-xl">مؤشر كتلة الجسم: {bmi}</p>
                <p className="mt-2">
                  {bmi < 18.5 ? 'نقص وزن' : 
                   bmi < 25 ? 'وزن طبيعي' :
                   bmi < 30 ? 'زيادة وزن' : 'سمنة'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* قسم حساب السعرات */}
        <div className="p-8 rounded-xl border border-[#C5A47E]">
          <h3 className="text-2xl text-[#C5A47E] mb-6">حاسبة السعرات الحرارية</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[#C5A47E] mb-2">العمر</label>
                <input
                  type="number"
                  className="w-full bg-[rgba(244,240,236,0.1)] border border-[#C5A47E] text-[#F4F0EC] p-3 rounded"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="block text-[#C5A47E] mb-2">الجنس</label>
                <select
                  className="w-full bg-[rgba(244,240,236,0.1)] border border-[#C5A47E] text-[#F4F0EC] p-3 rounded"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                >
                  <option value="male">ذكر</option>
                  <option value="female">أنثى</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#C5A47E] mb-2">مستوى النشاط</label>
              <select
                className="w-full bg-[rgba(244,240,236,0.1)] border border-[#C5A47E] text-[#F4F0EC] p-3 rounded"
                value={activityLevel}
                onChange={(e) => setActivityLevel(Number(e.target.value))}
              >
                <option value="1.2">قليل الحركة</option>
                <option value="1.375">خفيف النشاط</option>
                <option value="1.55">نشيط</option>
                <option value="1.725">نشيط جدًا</option>
              </select>
            </div>

            <button
              onClick={calculateCalories}
              className="w-full bg-gradient-to-r from-[#C5A47E] to-[#B08F6E] text-[#0A1A2F] py-3 rounded font-bold hover:opacity-90 transition"
            >
              احسب السعرات
            </button>

            {calories && (
              <div className="mt-6 p-4 bg-[#C5A47E] rounded text-[#0A1A2F] text-center">
                <p className="font-bold text-xl">السعرات اليومية: {calories}</p>
                <p className="mt-2">لحفظ الوزن الحالي</p>
              </div>
            )}
          </div>
        </div> 
      </div>

      {/* جدول تفسير الBMI */}
      <div className="max-w-2xl mx-auto mt-8 border border-[#C5A47E] p-6 rounded-xl">
        <h4 className="text-xl text-[#C5A47E] mb-4">تفسير مؤشر كتلة الجسم:</h4>
        <div className="grid grid-cols-2 gap-4 text-[#F4F0EC]">
          <div className="flex justify-between p-2 border-b border-[#C5A47E]">
            <span>أقل من 18.5</span>
            <span>نقص وزن</span>
          </div>
          <div className="flex justify-between p-2 border-b border-[#C5A47E]">
            <span>18.5 - 24.9</span>
            <span>طبيعي</span>
          </div>
          <div className="flex justify-between p-2 border-b border-[#C5A47E]">
            <span>25 - 29.9</span>
            <span>زيادة وزن</span>
          </div>
          <div className="flex justify-between p-2">
            <span>30 فأكثر</span>
            <span>سمنة</span>
          </div>
        </div>
      </div>
    </div>
  );
}