# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
  ];
  # Sets environment variables in the workspace
  env = {
    MONGODB_URL = "mongodb+srv://CookMate:xe36xFfCHD9hBTRg@cookmate.u3795.mongodb.net/?retryWrites=true&w=majority&appName=CookMate";
    PORT = "5000";
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "rangav.vscode-thunder-client"
    ];
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
      };
      # Runs when a workspace is (re)started
      onStart= {
        run-server = "npm run dev";
      };
    };
  };
}