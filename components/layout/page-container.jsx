import Head from "next/head"
const PageContainer = ({ title = "", description = "", children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " | " : ""} DHAMA RADIO - ฟังธรรมออนไลน์</title>
        <meta name='description' content={description ? description : title} />
      </Head>
      {children}
    </>
  )
}
export default PageContainer
