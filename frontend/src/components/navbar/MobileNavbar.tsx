import { Flex, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";

const MobileNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("color.4", "color.3");
  return (
    <Flex as="header" width="100%" height="4.5rem">
      <Flex as="nav" width="100%" bgColor={bg}>
        <Flex width="100%">
          <Flex
            width={{ base: "78%" }}
            alignItems={{ base: "center" }}
            justifyContent={{ base: "space-between" }}
          >
            <Flex
              height="100%"
              width={{ base: "4.5rem" }}
              bgColor="color.1"
              borderTopRightRadius="1.5rem"
              borderBottomRightRadius="1.5rem"
              alignItems={{ base: "center" }}
              justifyContent={{ base: "center" }}
            >
              <Image
                src="/logo.svg"
                alt="logo"
                loading="lazy"
                width={{ base: "1.75rem" }}
                height={{ base: "1.625rem" }}
              />
            </Flex>
            <Flex
              width={{ base: "1.25rem" }}
              height={{ base: "1.25rem" }}
              bg="transparent"
              marginRight={{ base: "1.375rem" }}
            >
              {colorMode === "light" ? (
                <Image
                  src="/icon-moon.svg"
                  width={{ base: "1.25rem" }}
                  height={{ base: "1.25rem" }}
                  onClick={toggleColorMode}
                />
              ) : (
                <Image
                  src="/icon-sun.svg"
                  width={{ base: "1.25rem" }}
                  height={{ base: "1.25rem" }}
                  onClick={toggleColorMode}
                />
              )}
            </Flex>
          </Flex>
          <Flex
            width={{ base: "22%" }}
            borderLeft="1px solid #494E6E"
            alignItems={{ base: "center" }}
            justifyContent={{ base: "center" }}
          >
            <Image
              src="/image-avatar.jpg"
              alt="avatar"
              loading="lazy"
              w={{ base: "2rem" }}
              h={{ base: "2rem" }}
              borderRadius="50%"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MobileNavbar;
