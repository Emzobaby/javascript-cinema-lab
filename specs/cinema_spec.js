const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    result = cinema.filmTitles()
    assert.deepStrictEqual(result, ["Moonlight", "Blade Runner 2049", "Dunkirk", "Black Panther", "T2 Trainspotting"])
  });
  it('should be able to find a film by title', function(){
    result = cinema.findFilm("Dunkirk");
    assert.strictEqual(result, dunkirk);
  });
  it('should be able to filter films by genre', function(){
    result = cinema.findByGenre("drama");
    assert.deepStrictEqual(result, [moonlight, trainspotting]);
  });
  it('should be able to check whether there are some films from a particular year', function(){
    result = cinema.checkByYear(2017);
    assert.strictEqual(result, true);
  }
);
  it('should be able to check whether there are no films from a particular year', function() {
    result = cinema.checkByYear(1999);
    assert.strictEqual(result, false);
  });
  it('should be able to check whether all films are over a particular length', function(){
    result = cinema.checkAllLength(90);
    assert.strictEqual(result, true);
  });
  it('should be able to check whether all films are over a particular length (false)', function(){
    result = cinema.checkAllLength(100);
    assert.strictEqual(result, false);
  });
  it('should be able to calculate total running time of all films', function(){
    result = cinema.totalRunTime();
    assert.strictEqual(result, 622);
  });
  it('should be able to filter films by year', function(){
    result = cinema.filmsByYear(2016);
    assert.deepStrictEqual(result, [moonlight]);
  });
  it('should be able to filter films by property', function(){
    result = cinema.filmsByProperty("genre", "action");
    assert.deepStrictEqual(result, [blackPanther]);
  })
  it('should be able to filter films by property', function(){
    result = cinema.filmsByProperty("year", 2016);
    assert.deepStrictEqual(result, [moonlight]);
  })

});
