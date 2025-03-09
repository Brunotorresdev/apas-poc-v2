import 'dayjs/locale/pt-br';

class TextHelper {
  static firstLetter(text: string): string {
    return text.charAt(0);
  }

  static captalize(text: string): string {
    const output = text;
    return output.charAt(0).toUpperCase() + output.slice(1);
  }

  static removeAccent(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  static contains(text1: string, text2: string): boolean {
    return this.removeAccent(text1.toLowerCase()).includes(
      TextHelper.removeAccent(text2.toLowerCase()),
    );
  }
}

export default TextHelper;
