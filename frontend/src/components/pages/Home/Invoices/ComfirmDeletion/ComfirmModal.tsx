import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Button,
} from "@chakra-ui/react";

import { useContext } from "react";

import { InvoiceContext } from "../../../../../context/InvoiceContext";

const ComfirmModal = () => {
  const { isOpen, onClose } = useContext(InvoiceContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Deletion</ModalHeader>

        <ModalBody>
          <Text>
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost">Cancel</Button>
          <Button variant="ghost">Delete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ComfirmModal;
