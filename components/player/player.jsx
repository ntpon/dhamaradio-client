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
import { useEffect, useRef, useState } from "react"
import {
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdVolumeUp,
  MdFormatListBulleted,
} from "react-icons/md"
import ReactPlayer from "react-player"
import PlayerList from "./player-list"
import { useSelector, useDispatch } from "react-redux"
import { formatTime } from "../../lib/formatters"
import { changeActiveAudio } from "../../lib/store/application/application.slice"
import { useHttpClient } from "../../lib/hooks/use-http"
import { addAudioToHistory } from "../../lib/api"
const Player = () => {
  const { activeAudio, activeAudios, activeAlbum } = useSelector(
    (state) => state.application
  )
  const { userId, authReady } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [isShowPlayerList, setIsShowPlayerList] = useState(false)
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [volume, setVolume] = useState([0, 50])
  const [played, setPlayed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffer, setBuffer] = useState(false)
  const { isLoading, error, sendRequest, clearError } = useHttpClient()

  useEffect(() => {
    const saveHistory = async (data) => {
      await sendRequest(data)
    }
    if (activeAudio && userId && authReady && activeAlbum !== "ประวัติการฟัง") {
      saveHistory(addAudioToHistory(activeAudio.album, activeAudio._id))
    }
  }, [activeAudio, userId, authReady, sendRequest])

  useEffect(() => {
    setPlaying(true)
  }, [activeAudio])

  const handleSeekChange = (e) => {
    playerRef.current.seekTo(parseFloat(e[1] / 100))
    setPlayed(e[1] / 100)
  }
  const handleVolumeChange = (value) => {
    setVolume([0, value[1]])
  }

  const handleDuration = (duration) => {
    setDuration(duration)
  }

  const handleProgress = (state) => {
    setPlayed(state.played)
    if (played && buffer) {
      setBuffer(false)
    }
  }
  const handlePlay = () => {
    setBuffer(false)
  }

  const handlePlaying = () => {
    setPlaying((prevState) => !prevState)
  }

  // const handleVolumeButton = () => {
  //   if (volume === 0) {
  //     setVolume(0.8)
  //   } else {
  //     setVolume(0)
  //   }
  // }

  const handleBuffer = () => {
    setBuffer(true)
  }

  const handlePlayerPrevNext = (num) => {
    if (!activeAudios) {
      return
    }
    const index = activeAudios.findIndex((item) => {
      return item._id === activeAudio._id
    })
    if (!activeAudios[index + num]) return
    dispatch(changeActiveAudio(activeAudios[index + num]))
  }
  const handleOnEnd = () => {
    handlePlayerPrevNext(1)
  }
  return (
    <Flex
      flexDirection='column'
      width='100vw'
      position='fixed'
      zIndex='3'
      bottom='0'
      transform={{
        base: activeAudio ? "" : "translateY(250px)",
      }}
      transition='all 700ms ease;'
    >
      {isShowPlayerList && (
        <PlayerList
          setIsShowPlayerList={setIsShowPlayerList}
          audios={activeAudios}
          name={activeAlbum}
        />
      )}
      <ReactPlayer
        className='react-player'
        style={{ display: "none" }}
        playing={playing}
        ref={playerRef}
        url={activeAudio ? activeAudio?.source?.url : ""}
        onPlay={handlePlay}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onError={() => {}}
        volume={volume[1] / 100}
        onBuffer={handleBuffer}
        onEnded={handleOnEnd}
      />

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
          value={[0, played * 100]}
          id='player-range-x'
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
              onClick={() => {
                handlePlayerPrevNext(-1)
              }}
            />

            {playing ? (
              <IconButton
                outline='none'
                variant='link'
                aria-label='pause'
                fontSize='30px'
                icon={<MdOutlinePauseCircleFilled />}
                onClick={handlePlaying}
              />
            ) : (
              <IconButton
                outline='none'
                variant='link'
                aria-label='play'
                fontSize='30px'
                icon={<MdOutlinePlayCircleFilled />}
                onClick={handlePlaying}
              />
            )}
            <IconButton
              outline='none'
              variant='link'
              aria-label='next'
              fontSize='24px'
              icon={<MdSkipNext />}
              onClick={() => {
                handlePlayerPrevNext(1)
              }}
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
            <Text
              as='h4'
              fontSize='12px'
              textOverflow='ellipsis'
              width='100%'
              noOfLines='1'
            >
              {activeAudio?.name}
            </Text>
            <Text fontSize='10px'>{activeAudio?.priest_name}</Text>
          </Flex>
          <Box display={{ base: "none", lg: "flex" }} width='80%'>
            <Box width='15%'>
              <Text textAlign='center'>{formatTime(duration * played)}</Text>
            </Box>
            <Flex width='70%' marginX='10px' alignItems='center'>
              <RangeSlider
                // aria-label={["min", "max"]}
                step={0.1}
                min={0}
                max={100}
                value={[0, played * 100]}
                id='player-range-x'
                // value={[100]}

                // max={duration ? duration.toFixed(2) : 0}
                onChange={handleSeekChange}
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
              <Text textAlign='center'>{formatTime(duration)}</Text>
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
              // aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={100}
              value={volume}
              // value={[100]}
              id='volume'
              // max={duration ? duration.toFixed(2) : 0}
              onChange={handleVolumeChange}
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
            onClick={() => {
              setIsShowPlayerList((prev) => !prev)
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Player
