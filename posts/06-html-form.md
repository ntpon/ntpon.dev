---
title: 'HTML พื้นฐาน PART-6: Form สร้างฟอร์มรับข้อมูล'
date: 'Jan 23, 2022'
category: 'HTML'
isActive: true
---

# ฟอร์ม (FORM)

เป็นหนึ่งใน Element ที่ช่วยทำให้เว็บของเราสามารถโต้ตอบผู้ใช้ใช้ได้ เราสร้างฟอร์มขึ้นมาเพื่อค่าบางอย่างจากผู้ใช้ เช่น ข้อความ, รูปภาพ จากนั้นนำข้อมูลไปประมวลผลด้วย Server

![](html-server.png)

> HTML เป็นเพียง Markup Language ทำหน้าเพียงแสดงผลข้อมูล ในด้านการประมวลผลไฟล์จะใช้ภาษา Backend เช่น PHP

# Element ที่เกี่ยวข้อง

- form
- input
- label
- textarea
- select
- button

# Form Element

\<form>\</form> เป็น element สำหรับสร้างฟอร์ม โดยจะทำหน้าที่ควบคุม input ต่างๆภายใน ซึ่งจะ มี attibutes 2 อย่างที่จะต้องระบุ

- action ระบุปลายทางของ URL Server ที่ต้องการจะให้ข้อมูลใน form เดินทางไป
- method ชนิดของการส่งข้อมูล
  - GET : เป็นการส่งข้อมูลประเภทที่ unsecured data การส่งแบบนี้ข้อมูลจะปรากฏบน URL หากเราไม่ได้กำหนด method GET จะเป็นค่าเริ่มต้น
  - POST : เป็นการส่งข้อมูลประเภทที่ secured data การส่งแบบนี้ข้อมูลจะไม่ปรากฏบน URL

> Method ทั้งสองต่างมีประโยชน์ทั้งคู่ แต่จะถูกใช้ในสถานการณ์ที่แตกต่างกัน

```html
<body>
  <form action="./" method="GET"></form>
</body>
```

# Input Element

เป็น element สำหรับรับข้อมูลจากผู้ใช้ โดยจะมี 2 attribute ที่สำคัญคือ

- type สำหรับกำหนดชนิดข้อมูล เช่น radio buttons, checkboxes, text, password, number,date
- name กำหนด key ที่จะใช้อ้างอิงเวลาข้อมูลถูกส่งไปยัง Server
- placehoder กำหนดข้อความที่จะให้แสดงเพื่อบอกรายละเอียดของ input เพิ่มเติม
- required กำหนดว่า filed นี้จะต้องระบุข้อมูล

```html
<body>
  <form action="./">
    <div>
      <label for="username"> Username </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="ระบุ Username"
        required
      />
    </div>
    <div>
      <label for="password"> Password </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="ระบุ Password"
        required
      />
    </div>
  </form>
</body>
```

# Label

เมื่อเราสร้าง Input ใดๆ เรามักจะมี ส่วนที่บอกว่า ช่อง input นี้คืออะไร โดยเราสามารถใช้ element แสดงข้อความตามที่เราได้เรียนไว้มาแสดงร่วมด้วยได้ แต่ html ได้สร้าง element ที่จะทำงานร่วมกันมาคือ label ซึ่งจะมี attribute ที่ชื่อ for สำหรับเชื่อมโยงไปยัง input โดยเราจะต้องกำหนด ID ให้กับ input ก่อน ดังตัวอย่างด้านล่างนี้ครับ

```html
<form action="./">
  <div>
    <label for="username"> Username </label>
    <input type="text" name="username" id="username" />
  </div>
  <div>
    <label for="password"> Password </label>
    <input type="password" name="password" id="password" />
  </div>
</form>
```

![](exmaple-text-input-1.png)

![](exmaple-text-input.png)

> ข้อสังเกตที่สำคัญ เมื่อเราทำการ link for กับ id แล้ว หากเราคลิกที่ label เว็บบราวเซอร์จะนำทางเราไปยัง input อัตโนมัติ

# Radio Button

radio button จะเป็นรูปแบบที่อนุญาติให้ผู้ใช้เลือกค่าที่เรากำหนดไว้แล้ว เพียงค่าเดียว โดยเราสามารถใช้ input จากนั้นกำหนด type เป็น radio ก็จะสามารถใช้ได้แล้วครับ ซึ่งจะมี attributes เพิ่มขึ้นมา 2 ตัวคือ

- checked ใช้เพื่อระบุว่า input นี้ควรถูกเลือก
- value ใช้เพื่อกำหนดค่าของข้อมูลที่จะส่งไป

ข้อควรรู้ที่สำคัญของ type แบบ radio คือจะต้องมี name ชื่อเดียวกันสำหรับกลุ่มเดียวกัน

```html
<form action="./">
  <div>
    Gender
    <input type="radio" value="male" id="male" name="gender" />
    <label for="male">ชาย</label>
    <input type="radio" value="female" id="female" name="gender" />
    <label for="female">หญิง</label>
  </div>
</form>
```

![](html-radio.png)

# Checkbox

ใช้สำหรับรับค่าจากผู้ใช้ที่อนุญาติให้เลือกค่าได้มากกว่า 1 ค่า ลักษณะการเขียนและ attribute จะเหมือนกับ radio เลยครับ แตกต่างกันที่ type ของ input จะเป็น checkbox

```html
<div>
  งานอดิเรก
  <input type="checkbox" value="movie" id="movie" name="favorit" />
  <label for="movie">ดูหนัง</label>
  <input type="checkbox" value="music" id="music" name="favorit" />
  <label for="music">ฟังเพลง</label>
  <input type="checkbox" value="book" id="book" name="favorit" />
  <label for="book">อ่านหนังสือ</label>
  <input type="checkbox" value="game" id="game" name="favorit" />
  <label for="game">เล่นเกม</label>
</div>
```

![](html-checkbox.png)

# File Input

บางครั้งเราต้องการให้ผู้ใช้แนบไฟล์จากเครื่อง เราจะใช้ input โดยจะระบุ type เป็น file ซึ่งเมื่อ form ของเรามีการอัพโหลด file จะต้องการการระบุ attribute เพิ่มเติมดังนี้ครับ

```html
<form action="./" enctype="multipart/form-data">
  <div>
    <label for="upload"> Upload</label>
    <input type="file" name="upload" id="upload" />
  </div>
</form>
```

![](html-input-file.png)

# Textarea Element

textarea จะใช้ในการสร้างตัวรับข้อมูลสำหรับ ข้อความหลายบรรทัด ซึ่งสามารถกำหนดได้ด้วย attribute rows

```html
<form action="./">
  <div>
    <label for="description">Description</label>
    <textarea name="description" id="description" rows="5"></textarea>
  </div>
</form>
```

![](html-textarea.png)

# Select Element

select จะเป็นข้อมูลในลักษณะของ dropdown จะรับค่าจากผู้ใช้ โดยจะมี option เป็น element ลูกสำหรับสร้างตัวเลือก มีรายละเอียด attribute ดังนี้ครับ

select

- name สำหรับกำหนดชื่อ key ที่จะส่งไปยัง server
- multiple เมื่อกำหนดส่วนนี้จะอนุญาติให้ dropdown สามารถรับค่าได้มากกว่า 1 ค่า

option

- value สำหรับกำหนดค่าของแต่ละตัวเลือก

```html
<div>
  <label for="device">ใช้งานเว็บไซต์บนอุปกรณ์ใด</label>
  <select name="device" id="device">
    <option value="computer">คอมพิวเตอร์</option>
    <option value="tablet">แท็บเล็ต</option>
    <option value="phone">phone</option>
  </select>
</div>
```

![](html-select.png)

# Button Element

button เป็นอีก element ที่ทำงานร่วมกับ form โดยเราสามารถ กำหนด atttribute ได้ดังนี้ครับ

- value สำหรับกำหนดค่า button เหมาะแก่การเอาไว้ตรวจสอบว่ามาจาก button ไหนครับ
- type สำหรับชนิดของ button
  - submit สำหรับส่งค่า form ไปยัง server
  - reset สำหรับการล้างค่าใน form

```html
<form action="./" enctype="multipart/form-data">
  <div>
    <button type="submit" value="submit">Submit</button>
    <button type="reset" value="Reset">Submit</button>
  </div>
</form>
```

![](html-button.png)
