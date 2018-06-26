TARGET=wasm32-unknown-unknown
PROJECT=rust_wasm_poc
BINDGEN_OPTS=--browser --no-typescript


all: dev
.PHONY: all dev release deps clean


# DEVELOPMENT BUILDS

target/$(TARGET)/debug/$(PROJECT).wasm: src/*.rs
	cargo +nightly build --target=$(TARGET)

target/$(TARGET)/debug/$(PROJECT){.js,_bg.wasm}: target/$(TARGET)/debug/$(PROJECT).wasm
	wasm-bindgen ./target/$(TARGET)/debug/$(PROJECT).wasm \
		--out-dir ./target/$(TARGET)/debug \
		$(BINDGEN_OPTS) --debug

dev: target/$(TARGET)/debug/$(PROJECT){.js,_bg.wasm}
	cp target/$(TARGET)/debug/$(PROJECT){.js,_bg.wasm} ./src/
	npm run dev


# RELEASE BUILDS

target/$(TARGET)/release/$(PROJECT).wasm: src/*.rs
	cargo +nightly build --target=$(TARGET) --release

target/$(TARGET)/release/$(PROJECT){.js,_bg.wasm}: target/$(TARGET)/release/$(PROJECT).wasm
	wasm-bindgen ./target/$(TARGET)/release/$(PROJECT).wasm \
		--out-dir ./target/$(TARGET)/release \
		$(BINDGEN_OPTS)

release: target/$(TARGET)/release/$(PROJECT){.js,_bg.wasm} deps
	cp target/$(TARGET)/release/$(PROJECT){.js,_bg.wasm} ./src/
	npm run build


# DEPENDENCIES

deps:
	npm install


# CLEAN

clean:
	rm -rf ./node_modules ./target ./src/$(PROJECT){.js,_bg.wasm}
