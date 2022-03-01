import Layout from '../../../../components/Layout';
import Container from '../../../../components/Container';
import Hero from '../../../../components/Hero';
import ArticleHeader from '../../../../components/ArticleHeader';
export default function BlogPage({ posts }) {
  return (
    <Layout title='Articles'>
      <Hero title='เกมก้องแก้วผจญภัย' text='นโยบายความเป็นส่วนตัว' />
      <Container>
        <div>
          <h3 className='title'>การเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
          <p>
            เราจะเก็บรวบรวมข้อมูลเกี่ยวกับผู้ใช้บริการเกมเท่าที่จำเป็น
            โดยเราจะทำการเก็บข้อมูล Email และ รหัสผ่าน (ผู้ใช้งานเป็นคนกำหนด),
            ชื่อภายในเกม เพื่อใช้ในการแยกผู้ใข้แต่ละคน
          </p>
        </div>
        <div>
          <h3 className='title'>การใช้ข้อมูลส่วนบุคคล</h3>
          <p>
            เราจะเก็บรวบรวม รักษา และใช้ข้อมูลเกี่ยวกับท่าน
            หากพิจารณาแล้วเห็นว่าจะเป็นประโยชน์ต่อการทำงานของเรา
            หรือเพื่อให้ท่านได้รับบริการที่ดี
            เราจะใช้ข้อมูลของท่านให้เป็นไปตามกฎหมายและกฎเกณฑ์ต่าง ๆ
            ที่เกี่ยวข้อง
          </p>
        </div>
        <div>
          <h3 className='title'>การเปิดเผยข้อมูลแก่บุคคลที่สาม</h3>
          <div>
            เราจะไม่เปิดเผยข้อมูลส่วนตัวของท่านที่ได้เก็บบันทึกไว้
            หรือข้อมูลอื่นๆ ที่สามารถบ่งชี้ได้ว่าเป็นของท่านแก่บุคคลที่สาม
            เว้นแต่
            <ul>
              <li>ได้รับความยินยอมจากท่าน</li>
              <li>
                การให้ข้อมูลดังกล่าวเป็นไปเพื่อช่วยให้ท่านสามารถทำธุรกรรมที่ท่านประสงค์
              </li>
              <li>การเปิดเผยข้อมูลนั้น ๆ เป็นไปโดยถูกต้องตามกฎหมาย</li>
            </ul>
            <p>
              เราจะไม่เปิดเผยข้อมูลส่วนตัวของท่านแก่บุคคลที่สามเพื่อนำไปใช้ในการดำเนิน
              กิจกรรมทางการตลาด เช่น การเสนอขายทางโทรศัพท์
              หรือการขายสินค้าทางไปรษณีย์ของสินค้าอื่นๆ เป็นต้น
            </p>
          </div>
          <div>
            <h3 className='title'>การรักษาความปลอดภัยสำหรับข้อมูลส่วนบุคคล</h3>
            <p>
              เรา มีการใช้มาตรการด้านความปลอดภัยที่เหมาะสมในการป้องกันการเข้าถึง
              หรือการแก้ไขข้อมูลโดยไม่ได้รับอนุญาต
              รวมทั้งมีการตรวจสอบการเข้าถึงข้อมูลดังกล่าว
              โดยใช้วิธีการเข้ารหัสและความปลอดภัยทางกายภาพที่เหมาะสมเพื่อป้องกันการ
              เข้าใช้งานระบบโดยไม่ได้รับอนุญาต
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
