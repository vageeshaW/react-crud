
const mongoose = require('mongoose');
const dbHandler = require('./db-handler');
const ItemController = require('../../controllers/item.controller');
//const app = require('../../server') // Link to your server file
//const supertest = require('supertest')
//const request = supertest(app)

describe("ItemController.item_create", () => {
	it("should have create item function", () => {
		expect(typeof ItemController.item_create).toBe("function");
		})
	})

describe("ItemController.items_list", () => {
	it("should have create item function", () => {
		expect(typeof ItemController.items_list).toBe("function");
		})
	})

describe("ItemController.item_details", () => {
	it("should have create item function", () => {
		expect(typeof ItemController.item_details).toBe("function");
		})
	})

describe("ItemController.update_item", () => {
	it("should have create item function", () => {
		expect(typeof ItemController.update_item).toBe("function");
		})
	})

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Item test suite.
 */
describe('item ', () => {
    it('can be created correctly', async () => {
        expect(async () => await ItemController.item_create(itemComplete))
            .not
            .toThrow();
    });
});


/**
 * Complete product example.
 */
const itemComplete = {
    todo_item: 'test_item',
    todo_description: 'test_description',
    todo_completed: true
};

/*describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/add')
      .send({
        todo_item: 'testing',
        todo_description: 'test is cool',
        todo_completed: false,
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  })
}) */