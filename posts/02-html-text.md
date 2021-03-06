---
title: 'HTML พื้นฐาน PART-2: Element สำหรับปรับแต่งข้อความ'
date: 'Jan 13, 2022'
category: 'HTML'
isActive: true
---

# การใส่หัวเรื่อง (Heading)

HTML มีระดับของหัวเรื่องอยู่ 6 ระดับ

- h1 สำหรับหัวเรื่องหลัก โดยทั่วไปควรมีเพียง 1 รายการต่อ 1 หน้า
- h2 สำหรับหัวข้อรอง

ความสำคัญของลำดับจะเรียงจะเลขน้อยไปหามาก เลขน้อยสำคัญสุดและมีขนาดใหญ่สุด

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

# การใส่ข้อความ (Paragraphs)

เป็นบล็อกสำหรับใส่ข้อความ โดยใช้ในการแบ่งข้อความเป็นย่อหน้าแต่ละ Paragraphs

```html
<p>
  This is the first paragraph of text. This is the first paragraph of text. This
  is the first paragraph of text. This is the first paragraph of text.
</p>
<p>
  This is the second paragraph. This is the second paragraph. This is the second
  paragraph. This is the second paragraph.
</p>
```

# ปรับแต่งลักษณะข้อความ

- \<strong> สำหรับแสดงตัวตัวหนาหรือแสดงถึงข้อความที่ต้องการเน้น มันจะใช้ร่วมกันกับ p tag

```html
<p>This is <strong> important </strong></p>
```

- \<em> สำหรับตัวเอียงหรือแสดงถึงข้อความที่มีการเปลี่ยนแปลงความหมาย

```html
<p>I thinks <em> something </em></p>
```

- \<sup> สำหรับข้อความที่แสดงขึ้นสูงจากข้อความปกติ เช่นวันที่, เลขยกกำลัง

```html
<p>2 <sub>0</sub> = 1</p>
```

- \<sub> สำหรับข้อความที่แสดงลง(ห้อยท้าย)จากของความปกติ เช่นสูตรทางวิทยาศาสตร์ เลข ฐาน

```html
<p>0101 <sup>2</sup> = 5</p>
```

# HTML Entities

ทดลองพิมพ์ช่องว่างสองครั้ง หรือลองกด Tap ลงใน HTML แล้วลองดูผลลัพท์ครับ

```html
<p>Hello HTML</p>
```

เราจะพบว่า HTML จะบังคับให้เราแสดงผลเพียงแค่ 1 ช่องว่างเท่านั้น เหตุผลที่เป็นแบบนั้นเพราะ HTML มองช่องว่างเป็น ตัวอักขระเฉพาะ เราสามารถแก้ไขปัญหานี้ได้ด้วยการใช้ HTML Entities

HTML Entities เป็นชิ้นส่วนของข้อความ (String) ที่เริ่มต้นด้วยเครื่องหมาย ( &) และสิ้นสุดด้วยเครื่องหมายอัฒภาค ( ;) โดยจะใช้แสดงอักขระพิเศษที่สงวนไว้

# ตัวอย่างแสดงช่องว่าง

```html
<h2>Hello&nbsp;&nbsp;HTML</h2>
```

# HTML Entities ที่ใช้บ่อย

![](html-entities.png)

ดูรายละเอียดแบบเต็ม

- https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references
- https://www.w3schools.com/html/html_entities.asp

# Lists

อย่างที่เคยกล่าวไว้ครับว่า HTML สามารถช่วยเราจัดการกับโครงสร้างหรือกลุ่มของบางสิ่งเพื่อแสดงผลทางเว็บเพจ ตอนนี้เราลองมาจัดการกับ รายการ (Item) กันครับ ซึ่ง HTML สามารถแบ่งกลุ่มของการจัดเรียง Item ไว้ 3 แบบ

- รายการเรียงลำดับ (Numbered lists)
- รายการแบบไม่เรียงลำดับ (Unordered/Bullet lists)
- รายการแบบคำจำกัดความ (Definition lists)

# รายการเรียงลำดับ (Numbered lists)

แสดงเป็นตัวเลขอยู่ข้างหน้ารายการมักจะใช้แสดงรายการที่ต้องเรียงลำดับเช่น ลำดับชื่อ, ขั้นตอนก

- \<ol> สำหรับ parent เพื่อบอกลักษณะแต่ละตัว
- \<li> เป็น children เพื่อเก็บ item แต่ละตัว

```html
<ol>
  <li>Art</li>
  <li>Blue</li>
  <li>Boss</li>
</ol>
```

# รายการแบบไม่เรียงลำดับ (Unordered/Bullet lists)

แสดงเป็นสัญลักษณ์อยู่ข้างหน้ารายการ มักจะใช้แสดงรายการที่ไม่ต้องเรียงลำดับเช่น ส่วนผสมอาหาร, อาหารโปรด

- \<ul> สำหรับ parent เพื่อบอกลักษณะแต่ละตัว
- \<li> เป็น children เพื่อเก็บ item แต่ละตัว

```html
<ul>
  <li>หมูสับ</li>
  <li>ใบกระเพรา</li>
  <li>พริก</li>
</ul>
```

# รายการคำจำกัดความ (DEFINITION LISTS)

แสดงเป็นหัวเรื่องสำหรับแสดงคำศัพท์และย่อหน้าแสดงความหมาย (คล้ายๆพจนานุกรม)

- \<dl> สำหรับ parent เพื่อบอกว่าเป็นกลุ่มของคำศัพท์
- \<dt> เป็น children เพื่อกำหนดคำศัพท์ (key)
- \<dd> เป็น children เพื่อแสดงความหมาย (value)

```html
<dl>
  <dt>คอมพิวเตอร์</dt>
  <dd>
    เครื่องอิเล็กทรอนิกส์แบบอัตโนมัติ ทำหน้าที่รับข้อมูล
    ประมวลผลด้วยหลักการทางคณิตศาสตร์และตรรกศาสตร์ด้วยความเร็วสูง
    และแสดงผลผ่านอุปกรณ์ประกอบต่างๆ
  </dd>
  <dt>อิเล็กทรอนิกส์</dt>
  <dd>
    วิทยาศาสตร์กายภาพแขนงหนึ่งที่นำมาประยุกต์ใช้กับการศึกษาวงจรไฟฟ้าที่ใช้สารกึ่งตัวนำและอุปกรณ์อื่นๆ
    ซึ่งควบคุมการเคลื่อนที่ของอิเล็กตรอนได้
  </dd>
</dl>
```

# แบบฝึกหัด

- ทดลองเขียนรายการสูตรอาหารเพื่อแสดงผลลัพท์ตามตัวอย่าง
- ทดลองเขียนข้อความ copyright เพื่อแสดงผลลัพท์ตามตัวอย่าง

# เอกสารอ้างอิง

- Jon Duckett (2011), HTML and CSS: Design and Build Websites.
- Lewis Coulson, Brett Jephson, Rob Larsen, Matt Park, Marian Zburlea (2019), The HTML and CSS Workshop.
