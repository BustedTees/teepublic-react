export default class TagHelper {
  unslugify(tag) {
    return tag.replace(/-/g, ' ').replace('tshirt', 't-shirt');
  }
}
