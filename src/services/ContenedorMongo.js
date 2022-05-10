export class ContenedorService {
    constructor(model) {
        this.model = model;
    }

    getAll() {
        try {
            return this.model.find();
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }

    getById(id) {
        try {
            return this.model.findById(id);
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }

    async create(data) {
        try {
            return await new this.model(data).save();
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }

    update(id, data) {
        try {
            return this.model.findByIdAndUpdate({ _id: id }, { $set: data });
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }

    delete(id) {
        try {
            return this.model.findByIdAndDelete({ _id: id });
        } catch (error) {
            console.error('Sucedió un error', error);
        }
    }
}