(() => {
	interface Product {
		id: number;
		name: string;
	}

	// Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
	// Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.

	class ProductService {
		getProduct(id: number) {
			// Realiza un proceso para obtener el producto y retornarlo
			console.log('Producto: ', { id, name: 'OLED Tv' });
		}

		saveProduct(product: Product) {
			// Realiza una petición para salvar en base de datos
			console.log('Guardando en base de datos', product);
		}
	}

	class Mailer {
		sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
			console.log('Enviando correo a los clientes', template);
		}
	}

	class ProductBloc {
		constructor(
			private productService: ProductService,
			private mailer: Mailer
		) {
			this.productService = productService;
			this.mailer = mailer;
		}

		loadProduct(id: number) {
			this.productService.getProduct(id);
		}

		saveProduct(product: Product) {
			this.productService.saveProduct(product);
		}

		notifyClient() {
			this.mailer.sendEmail(['Hola'], 'to-admins');
		}
	}

	class CartBloc {
		addToCart(productId: number) {
			console.log('Agregando al carrito', productId);
		}
	}

	const productService = new ProductService();
	const mailer = new Mailer();
	const productBloc = new ProductBloc(productService, mailer);
	const cartBloc = new CartBloc();

	productBloc.loadProduct(10);
	productBloc.saveProduct({ id: 10, name: 'OLED Tv' });
	productBloc.notifyClient();
	cartBloc.addToCart(10);
	// productService.getProduct(10);
	// productService.saveProduct({ id: 10, name: 'OLED TV' });
	// mailer.sendEmail(['Hiola'], 'to-admins');
})();
