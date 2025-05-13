import Serializer from '#src/core/serializer.js';

export default class SnippetContextSerializer extends Serializer {
  static {
    Serializer.prepare(this, [
      'title',
      ['content', 'enrichedContent'],
      'slug',
      ['date', 'dateFormatted'],
      ['dateTime', 'dateMachineFormatted'],
      ['tags', 'formattedTags'],
      ['cover', object => object.coverUrlFullSize],
      ['coverSrcset', object => object.coverSrcsetFullSize],
      'githubUrl',
      'tableOfContents',
    ]);
  }
}
