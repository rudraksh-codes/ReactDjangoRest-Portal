from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    #WRITE ONLY FIELD
    password = serializers.CharField(write_only = True, style = {'input_type':'password'}, min_length=8)
    class Meta :
        model = User
        #validation fields
        fields = ['username', 'email', 'password']

    def create(self, validated_data):   
        #User.objects.create() will save the password in plain text 
        #User.objects.create_user() will automatically hash the password 
        user = User.objects.create_user( #create_user(**validated_data) but only when you have only required field of this table in fields....
            validated_data['username'], 
            validated_data['email'], 
            validated_data['password']
        )
        
        return user 