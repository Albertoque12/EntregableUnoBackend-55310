const libro1 = {title: "Cien años de Soledad",
                description: "Realismo mágico",
                price: "350",
                thumbnail: "image",
                code: "1590",
                stock: "10"
                }
const libro2 = {title: "La metamorfosis",
                description: "Sombría",
                price: "150",
                thumbnail: "image",
                code: "1591",
                stock: "5"
                }
const libro3 = {title: "La historia interminable",
                description: "Fantasía",
                price: "250",
                thumbnail: "image",
                code: "1592",
                stock: "15"
                }

                class ProductManager {
                    static id = 0
                    constructor (title, description, price, thumbnail, code, stock){
                        this.title = title
                        this.description = description
                        this.price = price
                        this.thumbnail = thumbnail
                        this.code = code
                        this.stock = stock
                        this.products = []
                    }


                    getProducts(){
                        return this.products
                    }

                    addProduct(product){
                        if(this.getProducts().find((p)=> p.code === product.code)){
                         console.log(`Product with code ${product.code} already exists`)
                        } else {
                            product.id = ++ProductManager.id
                            this.products.push(product)
                        }
                    }

                    getProductById(id){
                        const productFound = this.getProducts().find((p)=> p.id === id)
                        if(!productFound){ console.log(`Prodcut with id ${id} was not found`)
                    } else return console.log("This is the product you are looking for:", productFound) 
                    }



                }

                const newProduct = new ProductManager()
                newProduct.addProduct(libro1)
                newProduct.addProduct(libro2)
                console.log(newProduct.getProducts()) 
                // newProduct.addProduct(libro1)
                // console.log(newProduct.getProducts()) 
                newProduct.addProduct(libro3)
                // console.log(newProduct.getProducts()) 
                newProduct.getProductById(2)