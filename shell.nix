let pkgs = import <nixpkgs> {};
in with pkgs;
  stdenv.mkDerivation {
    name = "deep";
    buildInputs = [ ngrok nodejs yarn ];
    shellHook = ''
      yarn
    '';
  }
