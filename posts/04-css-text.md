---
title: "CSS พื้นฐาน PART-4: Text,List,Link ปรับแต่งข้อความให้สวยงามด้วย CSS"
date: "Jan 26, 2022"
category: "CSS"
isActive: true
isShowHome: true
---

# Text

ได้แก่ Tag ที่ทำหน้าที่แสดง ข้อความทั้งหมดภายในเว็บไซต์ตัวอย่างเช่น h1 - h6, p เป็นต้น ซึ่งมีคำสั่งที่ผมมักจะใช้บ่อยๆดังนี้ครับ

```css
p {
  font-size: 24px;
  /* กำหนดขนาด */
  font-weight: 500;
  /* กำหนดความหนาของ ตัวอักษร */
}
```

# แนะนำ Property สำหรับ Ul List

ได้แก่ สิ่งที่เรียงเป็นรายการ เช่น ul,ol li เป็นต้น ซึ่งมีคำสั่งที่ผมมักจะใช้บ่อยๆดังนี้ครับ

```css
ol {
  list-style-type: circle;
  /* กำหนดเป็นวงกลม */
}

ul {
  list-style-image: url("sqpurple.gif");
  /* กำหนดเป็นรูปภาพ */
}
```

# Link

หมายถึง a tag ซึ่งทำหน้าที่นำทางเราไปยังไฟล์อื่นๆ ทั้งภายในและภายนอกเว็บไซต์ โดยในการกำหนด css เรามีเรื่องที่น่าสนใจคือ a tag มีทั้งหมด 4 state ได้

- a:link - สำหรับค่าเริ่มต้น
- a:visited - แสดงเมื่อ link ที่เราเยี่ยมชมแล้ว
- a:hover - แสดงเมื่อ เราเอาเมาส์ไปวางไว้
- a:active - แสดงเมื่อเรา click เมาส์ไว้

> สถานะแบบนี้ เราเรียกว่า pseudo-class หรือ คลาสหลอก เราใช้มันกำหนด element อื่นได้ด้วยนะครับ

```css
a:link {
  color: red;
}

a:visited {
  color: green;
}

a:hover {
  color: hotpink;
}

a:active {
  color: blue;
}
```

ลองมาดูตัวอย่างจริงๆกันครับ คือเรามักจะให้ :link กับ :visited มีลักษณะเหมือนกัน และในส่วน :hover กับ active ก็เช่นเดียวกันครับ

```css
a:link,
a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background-color: red;
}
```
