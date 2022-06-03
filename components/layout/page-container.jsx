import Head from "next/head"
const PageContainer = ({ title = "", description = "", children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " | " : ""} DHAMA RADIO - ฟังธรรมออนไลน์</title>
        <meta name='description' content={description ? description : title} />
        <meta name='keywords' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:image' content='/images/preview.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      {children}
    </>
  )
}
export default PageContainer
