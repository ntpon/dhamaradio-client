import {
  Icon,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import MainLayout from "../components/layout/main-container"
import PageContainer from "../components/layout/page-container"
import ReferenceItem from "../components/reference/reference-item"
const pageText = [
  [
    "เป็นอีกแหล่งหนึ่งในการรวบรวม/คำสอนของพระพุทธทาส",
    "เพื่อความสะดวกในการพังธรรม (สามารถปิดหน้าจอฟังได้)",
    "เผยแพร่หลักคำสอน / เสียงธรรม ให้แก่ผู้ที่สนใจ",
  ],
  [
    "Twitter พุทธทาสภิกขุ",
    "wwww.buddhadasa.org",
    "https://th.wikipedia.org/wiki/พระธรรมโกศาจารย์_(เงื่อม_อินฺทปญฺโญ)",
  ],
  [
    "เลือกฟังรายการเสียงธรรมและสามารถปิดหน้าจอได้",
    "ค้นหารายการตามชื่อพระอาจารย์หรือชื่อเสียงธรรมได้",
    "บันทึกหรือสร้างรายการสำหรับฟังธรรมได้ในครั้งถัดไป",
    "อ่านคำสอนของพระพุทธ / บทความที่เป็นประโยชน์",
  ],
]

const Reference = () => {
  return (
    <PageContainer title='คำถามที่พบบ่อย'>
      <MainLayout title='คำถามที่พบบ่อย'>
        <Tabs>
          <TabList justifyContent='center' borderBottom='none'>
            <Tab>เหตุผลที่ก่อตั้งเว็บไซต์</Tab>
            <Tab>เว็บไซต์อ้างอิง</Tab>
            <Tab>ความสามารถของเว็บไซต์</Tab>
          </TabList>
          <TabPanels display='flex' justifyContent='center'>
            <TabPanel>
              <List>
                {pageText[0].map((text) => (
                  <ReferenceItem title={text} key={text} />
                ))}
              </List>
            </TabPanel>
            <TabPanel>
              <List>
                {pageText[1].map((text) => (
                  <ReferenceItem title={text} key={text} />
                ))}
              </List>
            </TabPanel>
            <TabPanel>
              <List>
                {pageText[2].map((text) => (
                  <ReferenceItem title={text} key={text} />
                ))}
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MainLayout>
    </PageContainer>
  )
}

export default Reference
