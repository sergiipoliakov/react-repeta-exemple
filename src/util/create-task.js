import { v4 as uuidv4 } from "uuid";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

export default function createTask() {
	return {
		id: uuidv4(),
		text: lorem.generateSentences(5),
		compleate: false,
	};
}
