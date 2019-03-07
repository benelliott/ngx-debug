(() => {
    function init() {
        function subscribeComponentOutput(component, outputName, subscribe) {
            if (!subscribe) {
                subscribe = value => console.log(`${outputName} => ${JSON.stringify(value)}`);
            }
            const sub = component[outputName].subscribe(subscribe);
            return () => sub.unsubscribe();
        }

        window.ngx = {
            get ng() {
                if (!window.ng) {
                    throw new Error('Could not find the Angular runtime.' +
						' Ensure you are running an Angular application in dev mode.');
                }

                return window.ng;
            },

            get c() {
                if (!$0) {
                    throw new Error('Please highlight a component in the Elements panel first.');
                }

                return this.ng.probe($0).componentInstance;
            },

            c$(selector) {
                const el = document.querySelector(selector);

                if (!el) {
                    throw new Error('No elements matched the provided selector.');
                }

                return this.ng.probe(el).componentInstance;
            },

            get(token) {
                if (!$0) {
                    throw new Error('Please highlight a component in the Elements panel first.');
                }

                return ng.probe($0).injector.get(token);
            },

            get$(selector, token) {
                const el = document.querySelector(selector);

                if (!el) {
                    throw new Error('No elements matched the provided selector.');
                }

                return ng.probe(el).injector.get(token);
            },

            tick() {
                return this.get(ng.coreTokens.ApplicationRef).tick();
            },

            tick$(selector) {
                return this.get$(selector, ng.coreTokens.ApplicationRef).tick();
            },

            in(inputName, value) {
                this.c[inputName] = value;
                this.tick();
            },

            in$(selector, inputName, value) {
                this.c$(selector)[inputName] = value;
                this.tick();
            },

            out(outputName, subscribe) {
                subscribeComponentOutput(this.c, outputName, subscribe);
            },

            out$(selector, outputName, subscribe) {
                subscribeComponentOutput(this.c$(selector), outputName, subscribe);
            }
        };
    }

    const script = document.createElement('script');

    script.textContent = `
		(function(){
			${init};
			init();
		})();
	`;

    document.head.appendChild(script);
})();
