---
title: 'CSS พื้นฐาน PART-3: Inline และ Block, BoxModel Padding และ Margin '
date: 'Jan 26, 2022'
category: 'CSS'
isActive: true
isShowHome: true
---

# ประเภทของ HTML Tag

ก่อนจะไปเรื่องอื่นเราลองมาทบทวนประเภทของ Element กันก่อนครับ

# Block-Level Elements

จะมีลักษณะเป็น Block โดยจะใช้พื้นที่แนวนอนทั้งหมด หากมี Element อื่นมาใช้ จะทำการขึ้นบรรทัดใหม่อัตโนมัติ (ลองนึกถึงเวลาใช้ Tag h1 )

- Element ชนิดนี้ได้แก่ \<div>, \<section>, \<article>, \<nav>, \<h1>-\<h2>, \<p>, \<ul>, \<li>
- มี padding, margin (เราจะได้เรียนต่อไปครับ)
- Block-Level Elements ทั้งหมด
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

```html
<h1>Hello</h1>
<!-- ขึ้นบรรทัดใหม่อัตโนมัติ -->
<h2>Hello</h2>
```

# Inline Elements

ตรงกันข้ามกับ Block-Level Elements จะใช้พื้นที่และแนวนอนเท่าที่เนื้อหามี, การกำหนด width, height จะไม่มีผล Element จะใช้พื้นที่แบบอัตโนมัติ

- Element ชนิดนี้ได้แก่ \<img>, \<a>, \<input>, \<br>, \<span>, \<strong>
- margin-top,margin-bottom จะไม่มีผล padding-top, padding-bottom ไม่มีผลกับ Inline
- Inline Elements ทั้งหมด
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#changing_element_levels

# BoxModel

- ความหมาย

![](box-model.png)

- ประกอบไปด้วย

# Padding

- คำสั่งที่ใช้
- คำสั่งแบบสั้น

# Margin

- คำสั่งที่ใช้
- คำสั่งแบบสั้น

# Border

- คำสั่งที่ใช้
- คำสั่งแบบสั้น

# เรื่องที่น่าแปลกใจ

- กรณี margin-top , margin-bottom ชนกัน

# อ้างอิง

- https://hacks.mozilla.org/2015/03/understanding-inline-box-model/
- https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/
