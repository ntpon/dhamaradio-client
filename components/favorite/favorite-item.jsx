import { Box, Image, Text, Flex, LinkBox } from "@chakra-ui/react"
const FavoriteItem = ({ slug, image, name, number, onClickHandler }) => {
  return (
    <LinkBox
      onClick={() => {
        onClickHandler(slug)
      }}
      marginBottom='10px'
      sx={{
        transform: "all .3s",
        "&:hover": {
          bg: "blackAlpha.50",
          // color: "gray.200",
        },
        cursor: "pointer",
      }}
    >
      <Flex padding='5px 10px'>
        <Box>
          <Image
            src={image ? image : "/images/album-new.png"}
            alt='album image'
            width='80px'
            height='80px'
          />
        </Box>
        <Box marginX='15px'>
          <Text as='h2' fontWeight='500' fontSize='20px'>
            {name}
          </Text>
          <Text fontSize='14px'>{number} เสียง</Text>
        </Box>
      </Flex>
    </LinkBox>
  )
}
export default FavoriteItem
