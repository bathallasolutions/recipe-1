resource "tls_private_key" "key_pair" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "key_pair" {
  key_name   = "recipe1key"       # Create "recipe1key" to AWS!!
  public_key = tls_private_key.key_pair.public_key_openssh

  provisioner "local-exec" { # Create "recipe1key.pem" to your computer!!
    command = "echo '${tls_private_key.key_pair.private_key_pem}' > ./recipe1key.pem"
  }
}