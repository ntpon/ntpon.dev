---
title: 'HTML พื้นฐาน PART-1: ความหมายของ HTML และการใช้งานเบื้องต้น'
date: 'Jan 12, 2022'
category: 'HTML'
isActive: true
---

# Introduction

ลองนึกถึงเวลาเราอ่านหนังสือหรือเอกสารสิ่งพิมพ์ เราจะพบกับ **โครงสร้าง** ของการวางหัวข้อหลัก หัวข้อย่อยและส่วนของเนื้อหา ในเอกสารอาจมีรูปภาพประกอบ การเน้นสี ฯลฯ ในเว็บเพจเราทำแบบเดียวกัน โปรแกรมเมอร์สร้าง HTML ซึ่งเป็นตัวกำหนดโครงสร้างของ Webpage ที่แสดงบนบราวเซอร์

# HTML คืออะไร

- Hyper Text Markup Language
- ใช้อธิบาย/กำหนด โครงสร้างของ Web page

# หลักการทำงาน

- เขียน HTML
- บราวเซอร์แปลงรหัสที่เราเขียน
- แสดงผล

# เครื่องมือ

- Editor : โปรแกรมสำหรับแก้ไขเอกสาร
  - **Visual Studio Code**
  - Notepad
  - อื่นๆ
- Web browser : สำหรับแสดงผล Wep Page
  - **Chrome**
  - Firefox
  - Edge
  - อื่นๆ

# เขียน Code

- เปิดโปรแกรม Visual Studio Code
- สร้างไฟล์ index.html

> index เป็น default homepage ความหมายคือเพจแรกที่จะถูกเรียกอัตโนมัติ หากเราไม่ใส่ชื่อไฟล์, .html เป็นการบอกว่าเอกสารชิ้นนี้คือ html

```html
<h1>HELLO HTML</h1>
```

- ลากไฟล์มาแสดงบนที่บราวเซอร์เพื่อดูผลลัพท์

## Tag / Element คืออะไร

- HTML นำเสนอการจัดโครงสร้างเอกสารของเว็บไซต์ผ่าน Tag หรือบางครั้งเรียกว่า Element
- HTML Element จะแบ่งเป็น 2 ลักษณะ
  - มี Tag เปิดและปิดเสมอ เช่น
    - \<h1> ใช้สำหรับแสดงหัวเรื่อง
    - \<p> ใช้สำหรับแสดงหัวเรื่อง
  - เป็น Tag เดี่ยว เช่น
    - \<br> ใช้สำหรับขึ้นบรรทัดใหม่
    - \<hr> ใช้สำหรับตีเส้นขึ้นบรรทัดใหม่

> เลขตัวหลังของ h1 คือความสำคัญโดยสามารถเปลี่ยนเป็นเลข 1 - 6 ได้ ยิ่งเลขน้อยเป็นการบอกว่าเลขนั้นมีความสำคัญมาก

# โครงสร้างและรายละเอียดภายใน

- ภาพแสดง โครงสร้างแบบ Open Tag, Close Tag

![โครงสร้างแบบ Open Tag, Close Tag](tag-html-open-close.png)

- ภาพแสดง โครงสร้างแบบ Self-Closing Tag

![โครงสร้างแบบ Self-Closing Tag](self-closing-tag.png)

> ใน xml เราสามารถเขีน self-closing แบบนี้ได้ด้วยนะครับ \<br />

## แนะนำตัวเป็น HTML

```html
<h1>Hello</h1>
<hr />
<p>I am Art</p>
```

# Attribute

Attribute ใน HTML เหมือนกับ Atttibute ที่เราพบเจอในชีวิตประจำวัน มันเป็นการอธิบายลักษณะเพิ่มเติมของบางสิ่ง เช่น แมวสีส้ม ในทำนองเดียวกัน HTML Tag บางตัวเราต้องช่วยบอกมันถึง attribute เพื่อให้ทำงานได้ถูกต้อง

## รูปแบบ

![](html-attribute.png)

## ตัวอย่างการใช้ Anchor Element

- \<a> ย่อมาจาก anchor เป็นตัวช่วยเชื่อมโยงเว็บไซต์
  - href หมายถึง url ที่เราต้องการจะไป

```html
<a href="wwww.google.com">ไป Gooogle</a>
```

# Page Structure

เริ่มต้นการทดลองด้วยการพิมพ์ html บน vs code กันครับ

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

เราจะพบกับ tag element ของ html มากมาย ซึ่งนี้คือโครงสร้างพื้นฐานของการสร้างเว็บเพจด้วย html ครับ

## Page Structure คืออะไร

- Page Structure คือโครงสร้างของเว็บไซต์
- ในการจะสร้างเอกสารสำหรับเว็บเพจให้สมบูรณ์ เพื่อให้ตัว Search Engin เช่น Google สามารถเข้าใจและนำเว็บเราไปแสดงที่ผลการค้นหา เราต้องวางโครงสร้างตามมาตรฐานของ HTML

## HTML5 และ โครงสร้างพื้นฐาน

ใน HTML5 เป็นมาตรฐานของการสร้างเว็บเพจด้วยภาษา HTML ซึ่งบราวเซอร์ปัจจุบันรองรับแล้ว โดยมีตัว Tag Element ที่เราต้องรู้จักดังนี้ครับ

- \<!DOCTYPE html>
  - ส่วนการประกาศเวอชั่นของ HTML ซึ่งรูปแบบที่เขียนเป็นการบอกว่านี้คือเอกสาร html5

```html
<!DOCTYPE html>
```

- \<html>

  - บอกว่าเอกสารต่อไปนี้ทั้งหมดจะเขียนอยู่ภายใต้ html

```html
<!DOCTYPE html>
<html></html>
```

- \<head>
  - กำหนดส่วนหัว ซึ่งผู้ใช้งานเว็บบราวเซอร์จะไม่เห็นโดยตรง เช่นการดาว์โหลด font การโหลด style นอกเหนือจากนี้ยังมี meta tag ซึ่งเป็นส่วนที่จะช่วยอธิบายหน้าเว็บไซต์เพิ่มเติม โดยสามารถอ่านรายละเอียดเพิ่มเติมได้ที่ท้ายบทความ
  - ในที่นี้จะใช้เพียงการบอกว่าเอกสารนี้ถูกเข้ารหัสด้วย charset UTF-8 เท่านั้นครับ

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
</html>
```

- \<title>
  - กำหนดส่วนชื่อ tab ของบราวเซอร์

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>เว็บ Hello</title>
  </head>
</html>
```

- \<body>
  - ส่วนของเนื้อหา ทุกๆสิ่งที่เขียน จะแสดงผลโดยตรงกับเว็บบราวเซอร์

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>เว็บ Hello</title>
  </head>
  <body>
    <h1>Hello</h1>
    <hr />
    <p>I am Art</p>
  </body>
</html>
```

## แบบฝึดหัด

แบบฝึกหัดเป็นส่วนสำคัญเพราะจะช่วยเราทบทวนว่าเราจำเนื้อหาและเข้าใจสิ่งที่เรียนไปหรือไม่ครับ

- สร้างไฟล์ html เพื่อเขียน code
- กำหนดโครงสร้าง html5 แบบพื้นฐาน
- สร้างหน้าเว็บเพจ โดยใช้ Tag ทั้งสองประเภท

# เอกสารอ้างอิง

- Jon Duckett (2011), HTML and CSS: Design and Build Websites.
