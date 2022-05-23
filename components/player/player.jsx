import {
  Box,
  Flex,
  ButtonGroup,
  IconButton,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react"
import { useState } from "react"
import {
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdVolumeUp,
  MdFormatListBulleted,
} from "react-icons/md"

const Player = () => {
  const [playing, setPlaying] = useState(true)

  return (
    <Flex
      flexDirection='column'
      width='100vw'
      position='fixed'
      zIndex='2'
      bottom='0'
    >
      <Flex
        display={{ base: "flex", lg: "none" }}
        width='100%'
        bg='gray.800'
        margin='0'
        padding='0'
      >
        <RangeSlider
          aria-label={["min", "max"]}
          step={0.1}
          min={0}
          max={100}
          value={[50]}
          id='player-range'
          // value={[100]}

          // max={duration ? duration.toFixed(2) : 0}
          // onChange={onSeek}
          // onChangeStart={() => setIsSeeking(true)}
          // onChangeEnd={() => setIsSeeking(false)}
        >
          <RangeSliderTrack bg='gray.500'>
            <RangeSliderFilledTrack bg='gray.600' />
          </RangeSliderTrack>
          {/* <RangeSliderThumb index={0} /> */}
        </RangeSlider>
      </Flex>
      <Flex width='100%' bg='gray.800' padding='10px' height='50px'>
        <Flex flex='1' marginX='10px' justifyContent='center'>
          <ButtonGroup color='gray.600' alignItems='center' display='flex'>
            <IconButton
              outline='none'
              variant='link'
              aria-label='prev'
              fontSize='30px'
              icon={<MdSkipPrevious />}
              // onClick={prevSong}
            />

            {playing ? (
              <IconButton
                outline='none'
                variant='link'
                aria-label='pause'
                fontSize='30px'
                icon={<MdOutlinePauseCircleFilled />}
                //   onClick={() => setPlayState(false)}
              />
            ) : (
              <IconButton
                outline='none'
                variant='link'
                aria-label='play'
                fontSize='30px'
                icon={<MdOutlinePlayCircleFilled />}
                //   onClick={() => setPlayState(true)}
              />
            )}
            <IconButton
              outline='none'
              variant='link'
              aria-label='next'
              fontSize='24px'
              icon={<MdSkipNext />}
              // onClick={nextSong}
            />
          </ButtonGroup>
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          flex='7'
          color='white'
          alignItems='center'
          marginX='10px'
        >
          <Flex width={{ base: "100%", lg: "20%" }} flexDirection='column'>
            <Text as='h4' fontSize='12px'>
              เสียงอ่านคู่มือมนุษย์
            </Text>
            <Text fontSize='10px'>หลวงพ่อพุทธทาสภิกขุ</Text>
          </Flex>
          <Box display={{ base: "none", lg: "flex" }} width='80%'>
            <Box width='15%'>
              <Text textAlign='center'>0:01</Text>
            </Box>
            <Flex width='70%' marginX='10px' alignItems='center'>
              <RangeSlider
                aria-label={["min", "max"]}
                step={0.1}
                min={0}
                max={100}
                value={[50]}
                id='player-range'
                // value={[100]}

                // max={duration ? duration.toFixed(2) : 0}
                // onChange={onSeek}
                // onChangeStart={() => setIsSeeking(true)}
                // onChangeEnd={() => setIsSeeking(false)}
              >
                <RangeSliderTrack bg='gray.500'>
                  <RangeSliderFilledTrack bg='gray.600' />
                </RangeSliderTrack>
                {/* <RangeSliderThumb index={0} /> */}
              </RangeSlider>
            </Flex>
            <Box width='15%'>
              <Text textAlign='center'>1:43:38</Text>
            </Box>
          </Box>
        </Flex>
        <Flex flex='2'>
          <Flex width='20%' alignItems='center' marginX='10px'>
            <IconButton
              outline='none'
              variant='link'
              aria-label='prev'
              fontSize='30px'
              icon={<MdVolumeUp />}
              // onClick={prevSong}
            />
          </Flex>
          <Flex width='80%' marginX='10px' alignItems='center'>
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={100}
              value={[50]}
              id='player-range-2'
              // value={[100]}

              // max={duration ? duration.toFixed(2) : 0}
              // onChange={onSeek}
              // onChangeStart={() => setIsSeeking(true)}
              // onChangeEnd={() => setIsSeeking(false)}
            >
              <RangeSliderTrack bg='gray.500'>
                <RangeSliderFilledTrack bg='gray.600' />
              </RangeSliderTrack>
              {/* <RangeSliderThumb index={0} /> */}
            </RangeSlider>
          </Flex>
        </Flex>
        <Flex flex='1' marginX='5px' justifyContent='center'>
          <IconButton
            outline='none'
            variant='link'
            aria-label='prev'
            fontSize='30px'
            icon={<MdFormatListBulleted />}
            // onClick={prevSong}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Player
