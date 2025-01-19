import re
import json

# Nome do arquivo de texto
arquivo_entrada = "src/json/wcag/text.txt"
arquivo_saida = "topicos.json"

# Ler o conteúdo do arquivo
with open(arquivo_entrada, "r", encoding="utf-8") as f:
    texto = f.read()

# Remover linhas que contêm "acessar Critério de Sucesso"
texto = re.sub(r"acessar Critério de Sucesso.*?\n", "", texto)

# Expressão regular para separar os tópicos
padrao = r"(\d+\.\d+\.\d+ - .+? \[.+?\])\n\n(.+?)(?=\n\n\d+\.\d+\.\d+ -|\Z)"
topicos = re.findall(padrao, texto, re.DOTALL)

# Estruturar os dados
dados = []
for titulo, conteudo in topicos:
    dados.append({
        "titulo": titulo.strip(),
        "conteudo": conteudo.strip()
    })

# Exportar para JSON
with open(arquivo_saida, "w", encoding="utf-8") as f:
    json.dump(dados, f, ensure_ascii=False, indent=4)

print(f"Dados exportados para {arquivo_saida}")
