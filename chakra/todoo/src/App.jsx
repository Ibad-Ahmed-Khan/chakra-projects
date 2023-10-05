import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  List,
  ListItem,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo) {
      setTodoList([...todoList, todo]);
      toast({
        title: "Added",
        description: `Task: ${todo}`,
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "solid",
        position: "top-right",
      });
    }

    setTodo("");
  };

  const input = (e) => {
    setTodo(e.target.value);
  };

  const del = (index) => {
    setTodoList(todoList.filter((_, ind) => index !== ind));
    toast({
      title: "Todo-tally Gone!",
      description: "Crossed off one from your list.",
      status: "error",
      duration: 3000,
      isClosable: true,
      variant: "solid",
      position: "top-right",
    });
  };

  return (
    <Flex
      flexDirection="column"
      align="center"
      as="div"
      p="10"
      gap="5"
      bg="linear-gradient(to right, #ff5f6d, #ffc371)"
      h="100vh"
    >
      <Text fontWeight="bold" fontSize="3xl">
        Your Todo
      </Text>
      <Flex>
        <form onSubmit={handleSubmit}>
          <FormControl display="flex" flexDirection="row">
            <Input onChange={input} value={todo} borderRadius="none"></Input>
            <Button onClick={handleSubmit} borderRadius="none">
              <Box as={FaPlus} />
            </Button>
          </FormControl>
        </form>
      </Flex>
      <List w="xs">
        {todoList.map((item, index) => {
          return (
            <ListItem
              key={index}
              border="1px solid white"
              display="flex"
              alignItems="center"
              h="10"
              mt="6"
            >
              <Button
                onClick={() => del(index)}
                _hover={{ color: "red" }}
                mr="3"
                borderRadius="none"
              >
                <Box as={FaTrash} />
              </Button>
              {item}
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
}

export default App;
