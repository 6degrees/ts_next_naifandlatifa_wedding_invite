import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function TipsSection() {
  return (
    <Card dir="rtl" className="mt-8 rounded-xl">
      <CardHeader>
        <h2 className="text-3xl text-center text-empress-600">نصائح للضيوف</h2>
      </CardHeader>

      <CardContent className="text-empress">
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>يرجى الوصول قبل موعد الحفل بـ 30 دقيقة</li>
          <li>الملابس الرسمية مطلوبة</li>
          <li>يرجى تأكيد الحضور قبل [التاريخ]</li>
          <li>لا يسمح بإحضار الأطفال دون سن 12 عامًا</li>
        </ul>
      </CardContent>
    </Card>
  )
}
  
  