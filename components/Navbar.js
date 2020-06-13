import {
  Flex,
  Stack,
  useColorMode,
  Box,
  Image,
  PseudoBox,
  IconButton,
  Tooltip,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "blue.500", dark: "gray.600" };
  const textColor = { light: "black", dark: "gray.100" };
  const router = useRouter();

  const NavbarItem = (itemName, itemPath) => (
    <PseudoBox
      position="relative"
      opacity={router.pathname !== itemPath ? 0.4 : 1}
      fontFamily="OpenSans,Arial,sans-serif"
      //   borderWidth="5px"
      //   _hover={{ borderColor: "gray.200", bg: "gray.200" }}
    >
      <Link href={itemPath}>
        <a>{itemName}</a>
      </Link>
    </PseudoBox>
  );

  const handleLogin = (e) => {
    router.push("/login");
  };

  return (
    <Flex
      w="100%"
      h={("5vh", "5vh", "6vh", "6vh")}
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
      boxShadow="lg"
      align="center"
      justify="space-between"
      fontSize={["sm", "md", "lg", "lg"]}
      p={5}
    >
      <Flex
        w={["70vw", "70vw", "40vw", "40vw"]}
        justify="flex-start"
        align="center"
      >
        <Box ml={["0", "0", "10px", "10px"]} mr={["0", "0", "30px", "30px"]}>
          <Image h={["0", "0", "2vh", "2vh"]} src="/vercel.svg" alt="logo" />
        </Box>
        <Stack
          spacing={4}
          color={textColor[colorMode]}
          justify="flex-start"
          align="center"
          isInline
        >
          {NavbarItem("Home", "/")}
          {NavbarItem("Courses", "/courses")}
          {NavbarItem("Notices", "/notices")}
        </Stack>
      </Flex>
      <Flex justify="space-around" align="center">
        <Tooltip label="Login">
          <IconButton
            rounded="full"
            icon="check"
            mr={["3px", "3px", "8px", "10px"]}
            onClick={handleLogin}
            size={"sm"}
          />
        </Tooltip>
        <Tooltip label="Toggle Color Mode">
          <IconButton
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
            aria-label="Toggle Color Mode"
            size={"sm"}
            mr={["0", "2px", "4px", "5px"]}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Navbar;
