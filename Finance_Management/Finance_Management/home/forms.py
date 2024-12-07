# forms.py

from django import forms
from .models import Feedback

class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['username', 'email', 'feedback_text']
        widgets = {
            'feedback_text': forms.Textarea(attrs={'rows': 4, 'placeholder': 'Your feedback...'}),
        }
