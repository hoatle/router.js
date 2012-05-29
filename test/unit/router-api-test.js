var should = require('should');

var router = require('../../');


describe('router APIs', function() {

  it('router.VERSION', function() {
    router.VERSION.should.equal('0.1.0');
  });

  it('router.Route', function() {
    router.Route.should.be.a('function');
  });

  it('router.config', function() {
    router.config.should.be.a('function');
  });

  it('router.map', function() {
    router.map.should.be.a('function');
  });

  it('router.to', function() {
    router.to.should.be.a('function');
  });

  it('router.where', function() {
    router.where.should.be.a('function');
  });

  it('router.clear', function() {
    router.clear.should.be.a('function');
  });

  it('router.find', function() {
    router.find.should.be.a('function');
  });

  it('router.add', function() {
    router.find.should.be.a('function');
  });

  it('router.remove', function() {
    router.remove.should.be.a('function');
  });

  it('router.dispatch', function() {
    router.dispatch.should.be.a('function');
  });

  it('router.url', function() {
    router.url.should.be.a('function');
  });

  it('router.options', function() {
    router.options.should.be.a('function');
  });

  it('router.get', function() {
    router.get.should.be.a('function');
  });

  it('router.head', function() {
    router.head.should.be.a('function');
  });

  it('router.post', function() {
    router.post.should.be.a('function');
  });

  it('router.put', function() {
    router.put.should.be.a('function');
  });

  it('router.del', function() {
    router.del.should.be.a('function');
  });

  it('router.trace', function() {
    router.trace.should.be.a('function');
  });

  it('router.connect', function() {
    router.connect.should.be.a('function');
  });

  it('router.noConflict', function() {
    router.noConflict.should.be.a('function');
  });

});