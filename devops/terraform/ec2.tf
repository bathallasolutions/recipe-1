resource "aws_instance" "fe_recipe_one" {
  # ami = "ami-830c94e3"
  ami = data.aws_ami.ubuntu-linux-2004.id
  instance_type = "t2.micro"
  key_name = aws_key_pair.key_pair.key_name
  vpc_security_group_ids = [aws_security_group.aws-linux-sg.id] 
  user_data = file("aws-user-data.sh")

  tags = {
    Name = "recipe-1"
  }
}