# CWE-78

[CWE-78](https://cwe.mitre.org/data/definitions/78.html): Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection')

## Guidance

1. Start up the application.
   ```shell
   docker run -it --rm -p 5000:5000 ghcr.io/ere-be-dragons/cwe-78:main
   ```
2. Optionally, use [ngrok](https://ngrok.com) to allow workshop participants to connect
   ```shell
   ngrok http 5000 --domain <your domain>
   ```
3. Visit the application on the local or remote domain.
4. Use command injection to get the database credentials.
