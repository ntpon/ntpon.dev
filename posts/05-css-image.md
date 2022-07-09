---
title: "CSS พื้นฐาน PART-5: Image ปรับแต่งรูปภาพ"
date: "Jan 26, 2022"
category: "CSS"
isActive: true
isShowHome: true
---

# Image

หมายถึง tag img ซึ่งทำหน้าที่แสดงรูปภาพของเราครับ แต่ในเว็บไซต์ของเรา ก็มีการแสดงภาพหลายแบบครับ บางครั้งเราต้องการใช้ ภาพเป็นพื้นหลังหรือใช้แสดงเป็นภาพทั่วไป

# ภาพปกติ

```css
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  object-fit: cover;
}
```

# ภาพพื้นหลัง

ภาพพื้นหลังนั้น เราจะไม่ใช้ img ครับ เราจะใช้กับ element อื่น โดยจะใช้ css property ที่ชื่อว่า background ครับ

```css
.div {
  /* Using a <background-color> */
  background: green;

  /* Using a <bg-image> and <repeat-style> */
  background: url("test.jpg") repeat-y;

  /* Using a <box> and <background-color> */
  background: border-box red;

  /* A single image, centered and scaled */
  background: no-repeat center/80% url("../img/image.png");
}
```
