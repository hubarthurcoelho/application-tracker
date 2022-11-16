import { describe } from 'mocha';
import sinon from 'sinon';
import IClient from '../../../interfaces/clients';
import clientMock from '../../mocks/clientMock';
import { Model } from 'mongoose';
import ClientService from '../../../services/ClientService';
import { expect } from 'chai';

describe('Test the Client service', () => {
  afterEach(sinon.restore);

  it('Tests if it is possible to create a client', async () => {
    // arrange
    const clientInput: IClient =  {
      name: "devis",
      email: "troll@troll.com",
      password: "secret_admin"
    };
    sinon.stub(Model, 'create').resolves(clientMock);
    // act
    const service = new ClientService();
    const result = await service.create(clientInput);
    // assert
    expect(result).to.be.deep.equal(clientMock);
  });

  it('Tests if it is possible to delete a client', async () => {
    // arrange
    // act
    // assert
  });

  it('Tests if it is possible to update a client', async () => {
    // arrange
    // act
    // assert
  });

  it('Tests if it is possible to read a client', async () => {
    // arrange
    // act
    // assert
  });
});
