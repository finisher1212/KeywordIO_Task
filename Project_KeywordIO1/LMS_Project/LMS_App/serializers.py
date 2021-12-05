from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
from django.contrib.auth import get_user_model
from .models import Books


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email', 'password']

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = get_user_model().objects.create(
                username=validated_data['email']
        )
        
        user.set_password(validated_data['password'])
        Token.objects.create(user=user)
        user.save()
        return user
        # user = User.objects.create_user(**validated_data)
        # 
        # return user


class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'