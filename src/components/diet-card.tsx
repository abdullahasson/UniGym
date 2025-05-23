// app/diet-plan/page.tsx
"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DietCard = () => {
  const [expandedMeal, setExpandedMeal] = useState<number | null>(null);
  
  const sampleMeals = [
    {
      day: 0,
      meals: [
        {
          type: 'الوجبة الأولى',
          title: 'عجة الخضار مع خبز القمح الكامل',
          calories: 350,
          description: '3 بيضات + خضار مشكلة + 30 جم جبنة قليلة الدسم',
          nutrients: {
            protein: '25g',
            carbs: '18g',
            fats: '12g'
          }
        },
        {
            type: 'الوجبة الثانية',
            title: 'عجة الخضار مع خبز القمح الكامل',
            calories: 350,
            description: '3 بيضات + خضار مشكلة + 30 جم جبنة قليلة الدسم',
            nutrients: {
              protein: '25g',
              carbs: '18g',
              fats: '12g'
            }
        },
        {
            type: 'الوجبة الثالثة',
            title: 'عجة الخضار مع خبز القمح الكامل',
            calories: 350,
            description: '3 بيضات + خضار مشكلة + 30 جم جبنة قليلة الدسم',
            nutrients: {
              protein: '25g',
              carbs: '18g',
              fats: '12g'
            }
        },

        {
            type: 'الوجبة الرابعة',
            title: 'عجة الخضار مع خبز القمح الكامل',
            calories: 350,
            description: '3 بيضات + خضار مشكلة + 30 جم جبنة قليلة الدسم',
            nutrients: {
              protein: '25g',
              carbs: '18g',
              fats: '12g'
            }
        },

        {
            type: 'الوجبة الخامسة',
            title: 'عجة الخضار مع خبز القمح الكامل',
            calories: 350,
            description: '3 بيضات + خضار مشكلة + 30 جم جبنة قليلة الدسم',
            nutrients: {
              protein: '25g',
              carbs: '18g',
              fats: '12g'
            }
        },
        // يمكن إضافة بقية الوجبات بنفس الهيكل
      ]
    },
    // يمكن إضافة بقية الأيام
  ];

  return (

      <div className="max-w-6xl mx-auto">
        {/* تفاصيل الوجبات */}
        <div className="border border-[#C5A47E] rounded-xl overflow-hidden">
          {sampleMeals[0].meals.map((meal, index) => (
            <div 
              key={index}
              className="border-b border-[#C5A47E] last:border-0"
            >
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-[rgba(197,164,126,0.05)]"
                onClick={() => setExpandedMeal(expandedMeal === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C5A47E] flex items-center justify-center">
                    <span className="text-[#0A1A2F] font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl text-[#C5A47E]">{meal.type}</h3>
                </div>
                {expandedMeal === index ? <ChevronUp color="#C5A47E" /> : <ChevronDown color="#C5A47E" />}
              </div>

              {expandedMeal === index && (
                <div className="p-4 bg-[rgba(244,240,236,0.05)]">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg text-[#C5A47E] mb-2">{meal.title}</h4>
                      <p className="text-[#F4F0EC] opacity-90">{meal.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-[rgba(197,164,126,0.1)] rounded">
                        <span className="text-[#C5A47E]">السعرات الحرارية</span>
                        <span className="text-[#F4F0EC]">{meal.calories} كالوري</span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-[rgba(197,164,126,0.1)] rounded">
                          <p className="text-xs text-[#C5A47E]">البروتين</p>
                          <p className="text-[#F4F0EC]">{meal.nutrients.protein}</p>
                        </div>
                        <div className="p-2 bg-[rgba(197,164,126,0.1)] rounded">
                          <p className="text-xs text-[#C5A47E]">الكربوهيدرات</p>
                          <p className="text-[#F4F0EC]">{meal.nutrients.carbs}</p>
                        </div>
                        <div className="p-2 bg-[rgba(197,164,126,0.1)] rounded">
                          <p className="text-xs text-[#C5A47E]">الدهون</p>
                          <p className="text-[#F4F0EC]">{meal.nutrients.fats}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
  );
};

export default DietCard;