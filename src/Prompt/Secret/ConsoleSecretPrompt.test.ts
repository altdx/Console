import {assertEquals, Secret} from "../../deps.ts";
import {ConsoleSecretPrompt, ConsoleSecretPromptQuestionType} from "./mod.ts";

Deno.test("Altdx Console Secret Prompt - Should have right options", () => {
  const consoleSecret = new ConsoleSecretPrompt("Password: ");

  const question: ConsoleSecretPromptQuestionType = {
    name: "answer",
    type: Secret,
    message: "Password: ",
    min: null,
    max: null,
    show: true,
  };

  assertEquals(question, consoleSecret.getQuestion());
});

Deno.test("Altdx Console Secret Prompt - Should set and get name", () => {
  const consoleSecret = new ConsoleSecretPrompt("Password: ");
  assertEquals(true, consoleSecret.setName("price") instanceof ConsoleSecretPrompt);
  assertEquals("price", consoleSecret.getName());
});

Deno.test("Altdx Console Secret Prompt - Should have Secret type", () => {
  const consoleSecret = new ConsoleSecretPrompt("Password: ");
  assertEquals(Secret, consoleSecret.getType());
});

Deno.test("Altdx Console Secret Prompt - Should have message", () => {
  const consoleSecret = new ConsoleSecretPrompt("Password: ");
  assertEquals("Password: ", consoleSecret.getMessage());
});

Deno.test("Altdx Console Secret Prompt - Should set minimum or maximum length", () => {
  const consoleSecret = new ConsoleSecretPrompt("Password: ");
  assertEquals(true, consoleSecret.min(10) instanceof ConsoleSecretPrompt);
  assertEquals(true, consoleSecret.max(200) instanceof ConsoleSecretPrompt);
  assertEquals(10, consoleSecret.getQuestion().min);
  assertEquals(200, consoleSecret.getQuestion().max);
});

Deno.test("Altdx Console Secret Prompt - Should show or hide input", () => {
  const consoleSecret = new ConsoleSecretPrompt("Password: ");
  assertEquals(true, consoleSecret.show() instanceof ConsoleSecretPrompt);
  assertEquals(true, consoleSecret.getQuestion().show);
  assertEquals(true, consoleSecret.hide() instanceof ConsoleSecretPrompt);
  assertEquals(false, consoleSecret.getQuestion().show);
});
