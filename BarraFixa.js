function init() {
			var cabecalho = document.querySelector('.cabecalho');
			var cabecalhoEspaco = document.querySelector('.cabecalho-espaco');
			var cabecalhoOffset = cabecalho.offsetTop;

			function verificaCabecalho() {
				var scrollTop = window.scrollY;
				var cabecalhoAltura = cabecalho.offsetHeight;

				if(scrollTop >= cabecalhoOffset) {
					// rolagem da página passou do elemento, vamos fixá-lo
					cabecalho.classList.add('cabecalho--fixo');
					
					// ativa cabecalho-espaco para ocupar o espaço perdido
					cabecalhoEspaco.style.height = cabecalhoAltura + 'px';
				} else {
					// retira a classe adicional do elemento
					cabecalho.classList.remove('cabecalho--fixo');

					// retira a altura do cabecalho-espaco
					cabecalhoEspaco.style.height = 0;
				}
			}

			window.addEventListener('scroll', verificaCabecalho);
			window.addEventListener('resize', verificaCabecalho);
		}

		window.addEventListener('load', init);