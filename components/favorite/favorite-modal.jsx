import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Skeleton,
  Stack,
  useToast,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addAudioToFavoriteList, getFavoriteMeList } from "../../lib/api"
import { useHttpClient } from "../../lib/hooks/use-http"
import { changeIsModalAddFavorite } from "../../lib/store/application/application.slice"
import FavoriteItem from "./favorite-item"

const FavoriteModal = () => {
  const toast = useToast()
  const { isLoading, sendRequest, error } = useHttpClient()
  const [favorites, setFavorites] = useState([])
  const { selectAudioId, isModalAddFavorite } = useSelector(
    (state) => state.application
  )
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest(getFavoriteMeList())
        setFavorites(response.data.favorits)
      } catch (error) {}
    }
    if (isModalAddFavorite) {
      fetchData()
    }
  }, [sendRequest, isModalAddFavorite])

  const selectFavoriteHandle = async (id) => {
    try {
      const { message, data } = await sendRequest(
        addAudioToFavoriteList(id, selectAudioId)
      )
      toast({ title: message, status: "success", isClosable: true })
      dispatch(changeIsModalAddFavorite(false))
    } catch (error) {
      toast({ title: error.message, status: "error", isClosable: true })
    }
  }

  return (
    <Modal
      isOpen={isModalAddFavorite}
      onClose={() => {
        dispatch(changeIsModalAddFavorite(false))
      }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent width='350px' height='400px' overflowY='auto'>
        <ModalHeader color='gray.700'>เพิ่มเสียงลงรายการ</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {isLoading && (
            <Stack>
              <Skeleton>
                <FavoriteItem />
              </Skeleton>
              <Skeleton>
                <FavoriteItem />
              </Skeleton>
            </Stack>
          )}
          {!isLoading &&
            favorites.map((favorite) => (
              <FavoriteItem
                key={favorite._id}
                id={favorite._id}
                name={favorite.name}
                number={favorite.audios.length}
                onClickHandler={selectFavoriteHandle}
              />
            ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default FavoriteModal
