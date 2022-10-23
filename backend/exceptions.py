class BaseExceptions(Exception):
    def __init__(self, *args):
        super().__init__(*args)


class WorngValue(BaseExceptions):
    pass
