# Install npm dependencies
setup: install

# Install npm dependencies
install:
	@npm install

# Serve application
serve:
	@ng serve

# Serve application
test:
	@ng test

# Coding style checks
cs:
	@ng lint

.PHONY: setup install serve test
