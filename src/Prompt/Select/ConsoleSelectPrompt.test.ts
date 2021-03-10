import {assertEquals, Select} from "../../deps.ts";
import {ConsoleSelectPrompt, ConsoleSelectPromptQuestionType, SelectOptionType} from "./mod.ts";

Deno.test("Altdx Console Select Prompt - Should have right options", () => {
  const consoleSelect = new ConsoleSelectPrompt("Select a value");

  const question: ConsoleSelectPromptQuestionType = {
    name: "answer",
    type: Select,
    message: "Select a value",
    itemsPerPage: 10,
    options: [],
    search: null,
  };

  assertEquals(question, consoleSelect.getQuestion());
});

Deno.test("Altdx Console Select Prompt - Should set and get name", () => {
  const consoleSelect = new ConsoleSelectPrompt("Select a value");
  assertEquals(
    true,
    consoleSelect.setName("two") instanceof ConsoleSelectPrompt,
  );
  assertEquals("two", consoleSelect.getName());
});

Deno.test("Altdx Console Select Prompt - Should have Select type", () => {
  const consoleSelect = new ConsoleSelectPrompt("Select a value");
  assertEquals(Select, consoleSelect.getType());
});

Deno.test("Altdx Console Select Prompt - Should have message", () => {
  const consoleSelect = new ConsoleSelectPrompt("Select a value");
  assertEquals("Select a value", consoleSelect.getMessage());
});

Deno.test("Altdx Console Select Prompt - Should set and get items per page", () => {
  const consoleSelect = new ConsoleSelectPrompt("Select a value");
  assertEquals(true, consoleSelect.setItemsPerPage(5) instanceof ConsoleSelectPrompt);
  assertEquals(5, consoleSelect.getItemsPerPage());
});

Deno.test("Altdx Console Select Prompt - Should manage options", () => {
  const options: SelectOptionType[] = [
    {
      name: "color",
      value: "red",
    }
  ];

  const consoleSelect = new ConsoleSelectPrompt("Select a value");
  assertEquals(true, consoleSelect.setOptions(options) instanceof ConsoleSelectPrompt);
  assertEquals(options, consoleSelect.getOptions());
  consoleSelect.addOption("John", "name");
  assertEquals([
    {name: "color", value: "red"}, {name: "name", value: "John"}
  ], consoleSelect.getOptions());
});

Deno.test("Altdx Console Select Prompt - Should set search value", () => {
  const consoleSelect = new ConsoleSelectPrompt("Select a value");
  assertEquals(true, consoleSelect.search("filter") instanceof ConsoleSelectPrompt);
  assertEquals("filter", consoleSelect.getQuestion().search);
});

Deno.test("Altdx Console Number Prompt - Should parse options", () => {
  const consoleSelect = new ConsoleSelectPrompt("");

  const question: unknown = {
    name: "answer",
    type: Select,
    message: "",
    maxRows: 10,
    options:[],
    search: false,
    searchLabel: undefined,
  };

  assertEquals(question, consoleSelect.getParseQuestion());
});
