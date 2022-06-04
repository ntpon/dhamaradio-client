import { Box, Text, Flex, IconButton } from "@chakra-ui/react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useSelector, useDispatch } from "react-redux"
import { changeActiveAudio } from "../../lib/store/application/application.slice"
const PlayerList = ({ setIsShowPlayerList, name, audios }) => {
  const { activeAudio } = useSelector((state) => state.application)
  const dispatch = useDispatch()
  return (
    <Box
      width='100%'
      bottom='50px'
      position='fixed'
      bg='gray.700'
      height='50%'
      color='white'
      zIndex='-1'
    >
      <Flex justifyContent='space-between' padding='10px 15px'>
        <Box>
          <Text fontSize='24px'>
            {name + "  "}
            <Text as='span' fontSize='14px'>
              ({audios.length} เสียง)
            </Text>
          </Text>
        </Box>
        <Box>
          <IconButton
            bg='transparent'
            fontSize='34px'
            sx={{
              transform: "all .3s",
              "&:hover": {
                bg: "blackAlpha.50",
                // color: "gray.200",
              },
              cursor: "pointer",
            }}
            onClick={() => {
              setIsShowPlayerList(false)
            }}
          >
            <MdKeyboardArrowDown />
          </IconButton>
        </Box>
      </Flex>
      <Box overflowY='auto' height='100%' paddingBottom='60px'>
        {audios?.map((audio, index) => (
          <Flex
            key={audio._id}
            padding='10px'
            alignItems='center'
            bg={activeAudio._id === audio._id && "blackAlpha.300"}
            onClick={() => dispatch(changeActiveAudio(audio))}
            sx={{
              "&:hover": {
                bg: "blackAlpha.300",
                // color: "gray.200",
              },
              cursor: "pointer",
            }}
          >
            <Box width='50px' marginLeft='15px'>
              <Text fontSize='16px' color='whiteAlpha.700'>
                {index + 1}
              </Text>
            </Box>
            <Box>
              <Text fontSize='16px' color='whiteAlpha.800'>
                {audio.name}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default PlayerList
