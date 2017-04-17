describe('Palette.Type.Lines', () => {
  describe('Constructor', () => {
    Test.assertSL();
    let LinePalette = new Test.Lib.Palette.Palette.Type.Lines(Test.SL, $.extend({}, Test.Lib.Core.StampLines.DEFAULT.config.Palettes.Lines));
    it('should initialize', () => {
      expect(LinePalette).to.exist;
    });
    it('should be constructed by LinePalette', () => {
      expect(LinePalette.constructor.name).to.equal('LinePalette');
    });
  });
});